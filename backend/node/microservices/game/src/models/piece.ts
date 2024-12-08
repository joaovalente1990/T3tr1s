import mongoose from "mongoose";

import { IPiece } from "../common/types";

const Schema = mongoose.Schema;

const pieceSchema = new Schema({
  type: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  x_pos: {
    type: Number,
    required: true,
  },
  y_pos: {
    type: Number,
    required: true,
  },
  col: {
    type: Number,
    required: true
  },
  status: {
    type: Number,
    required: true,
  },
  moveAllowedLeft: {
    type: Boolean,
    required: true
  },
  moveAllowedRight: {
    type: Boolean,
    required: true
  },
  moveAllowedDown: {
    type: Boolean,
    required: true
  }
});

type PieceType = IPiece & mongoose.Document;

export default mongoose.model<PieceType>("Piece", pieceSchema);