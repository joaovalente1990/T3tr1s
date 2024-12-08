import fs from "fs";
import https from "https";
import path from "path";

import bodyParser from 'body-parser';

import compression from "compression";
import csrf from "csurf";
import express, { Response } from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";

import Game from "./models/game";

import { IError, IGame } from "./common/types";
import gameRoutes from "./routes/game";
import { Socket } from "net";

import createMQConsumer from './broker/consumer';

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.hoky7.mongodb.net//${process.env.MONGO_DATABASE}`;

const AUTH_QUEUE_NAME = "AuthQueue";
const PAYMENTS_QUEUE_NAME = "PaymentsQueue";

const app = express();

const consumer = createMQConsumer(`${process.env.AUTH_AMQP_URL}`, `${process.env.PAYMENTS_AMQP_URL}`, AUTH_QUEUE_NAME, PAYMENTS_QUEUE_NAME);

const csrfProtection = csrf();

const privateKey = fs.readFileSync("server.key");
const certificate = fs.readFileSync("server.cert");

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

app.use(helmet());
app.use(compression());
app.use(morgan("combined", { stream: accessLogStream }));

app.use(csrfProtection);

consumer();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/games", gameRoutes);

app.use((error: IError, {}, res: Response, {}) => {
  const status = error.statusCode || 500;
  res.status(status).json({ errors: error.list });
});

mongoose
  .connect(MONGODB_URI)
  .then((_result) => {
    const server = https
      .createServer({ key: privateKey, cert: certificate }, app)
      .listen(process.env.PORT || 3000);

    const io = require("./socket").init(server);

    io.on("connection", (socket: Socket) => {
      socket.on("moveLeft", (message: any) => {
        Game.findOne({ userId: message.userId })
          .then((result: IGame | null) => {
            if(!result) {
              throw new Error("Game not found!");
            }
            socket.emit("serverSend", result.current_piece);
          })
          .catch((err) => {
            console.log(err);
          });
      });

      socket.on("moveRight", (message: any) => {
        Game.findOne({ userId: message.userId })
          .then((result: IGame | null) => {
            if(!result) {
              throw new Error("Game not found!");
            }
            socket.emit("serverSend", result.current_piece);
          })
          .catch((err) => {
            console.log(err);
          });
      });

      socket.on("drop", (message: any) => {
        Game.findOne({ userId: message.userId })
          .then((result: IGame | null) => {
            if(!result) {
              throw new Error("Game not found!");
            }
            socket.emit("serverSend", result.current_piece);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
