import mongoose from "mongoose";
import { IGame } from "../common/types";

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  status: {
    type: Number,
    required: true,
  },
  n_lines: {
    type: Number,
    required: true,
  },
  n_rows: {
    type: Number,
    required: true,
  },
  n_levels: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  current_piece: {
    type: Schema.Types.ObjectId,
    required: false,
  },
  next_piece_type: {
    type: Number,
    required: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: false,
  }
});

type GameType = IGame & mongoose.Document;

export default mongoose.model<GameType>("Game", gameSchema);
