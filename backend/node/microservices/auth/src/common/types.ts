import e from "express";
import { ValidationError } from "express-validator";
import { ObjectId } from "mongoose";

export interface IUser {
  _id: ObjectId;
  email: string;
  password: string;
  name: string;
  games: ObjectId[];
  currentGame: ObjectId;
}

export interface IError extends Error {
    statusCode: number;
    list: ValidationError[];
}
