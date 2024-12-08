import fs from 'fs';
import path from 'path';
import https from 'https';

import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import csrf from 'csurf';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';

import bodyParser from 'body-parser';

import createMQConsumer from './broker/consumer';

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.2zvru.mongodb.net/${process.env.MONGO_DATABASE}`;

const GAMES_QUEUE_NAME = "GamesQueue";
const PAYMENTS_QUEUE_NAME = "PaymentsQueue";

const app = express();

const consumer = createMQConsumer(`${process.env.GAMES_AMQP_URL}`, `${process.env.PAYMENTS_AMQP_URL}`, GAMES_QUEUE_NAME, PAYMENTS_QUEUE_NAME);

const csrfProtection = csrf();

const privateKey = fs.readFileSync('server.key');
const certificate = fs.readFileSync('server.cert');

import authRoutes from "./routes/auth";
import { IError } from './common/types';

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
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use("/auth", authRoutes);

app.use((error: IError, _req: Request, res: Response, _next: NextFunction) => {
  const status = error.statusCode || 500;
  res.status(status).json({ errors: error.list});
});

mongoose
  .connect(MONGODB_URI)
  .then(_ => {
    https
      .createServer({ key: privateKey, cert: certificate }, app)
      .listen(process.env.PORT || 3000);
  })
  .catch((err) => {
    console.log(err);
  });
