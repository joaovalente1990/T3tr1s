import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

import User from "../models/user";

import { IUser, IError } from "../common/types";

import createMQProducer from '../broker/producer';

const AUTH_QUEUE_NAME = "AuthQueue";

const producer = createMQProducer(`${process.env.AUTH_AMQP_URL}`, AUTH_QUEUE_NAME);

class authService {
  login(req: Request, res: Response, next: NextFunction) {
    const email = req.body.email;
    const password = req.body.password;

    let loadedUser: IUser;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ validationErrors: errors.array() });
    }

    User.findOne({ email: email })
      .then((user: IUser | null) => {
        if (!user) {
          const error = new Error(
            "A user with this email could not be found."
          ) as IError;

          error.statusCode = 401;
          throw error;
        }

        loadedUser = user;
        return bcrypt.compare(password, user.password);
      })
      .then((isEqual: Boolean) => {
        if (!isEqual) {
          const error = new Error("Wrong password!") as IError;
          error.statusCode = 401;
          throw error;
        }

        const token = jwt.sign(
          {
            email: loadedUser.email,
            userId: loadedUser._id.toString(),
          },
          `${process.env.JWT_SECRET}`,
          { expiresIn: "1h" }
        );
        res
          .status(200)
          .json({ token: token, userId: loadedUser._id.toString() });
      })
      .catch((err: IError) => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  }

  signup(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const error = new Error("Validation failed.") as IError;
      error.statusCode = 422;
      error.list = errors.array();
      throw error;
    }

    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    bcrypt
      .hash(password, 12)
      .then((hashedPw) => {
        const user = new User({
          email: email,
          password: hashedPw,
          name: name,
        });
        return user.save();
      })
      .then((result) => {
        res.status(201).json({ message: "User created!", userId: result._id });
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  }

  logout(req: Request, res: Response, next: NextFunction) {
    // remove the game and all the data associated
    // send command to the game microservice through the broker system (RabitMQ)
  }
}

export default new authService();
