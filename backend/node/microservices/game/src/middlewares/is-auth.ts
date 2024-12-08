import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";
import { IError, IRequest, IToken } from "../common/types";

module.exports = (req: IRequest, res: Response, next: NextFunction) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    const error = new Error("Not authenticated.") as IError;
    error.statusCode = 401;
    throw error;
  }

  const token = authHeader.split(" ")[1];
  let decodedToken: IToken | String;

  try {
    decodedToken = jwt.verify(token, `${process.env.JWT_SECRET}`) as IToken;
  } catch (err: any) {
    err.statusCode = 500;
    throw err;
  }

  if (!decodedToken) {
    const error = new Error("Not authenticated.") as IError;
    error.statusCode = 401;
    throw error;
  }

  req.userId = decodedToken.userId;
  next();
};
