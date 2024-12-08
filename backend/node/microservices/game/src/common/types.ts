import { ValidationError } from "express-validator";
import { ObjectId } from "mongoose";
import jwt from "jsonwebtoken";

export interface IRequest extends Request {
    get(name: string): string;
    userId: string;
}

export interface IGame {
    _id: ObjectId,
    status: number,
    n_lines: number,
    n_rows: number,
    n_levels: number,
    score: number,
    current_piece: ObjectId
    next_piece_type: number,
    userId: ObjectId
}

export interface IPiece {
    _id: ObjectId,
    type: number,
    width: number,
    height: number,
    x_pos: number,
    y_pos: number,
    col: number,
    status: number,
    moveAllowedLeft: Boolean,
    moveAllowedRight: Boolean,
    moveAllowedDown: Boolean
}

export interface IError extends Error {
    statusCode: number;
    list: ValidationError[];
}

export interface IToken extends jwt.JwtPayload {
    userId: string
}