import mongoose from "mongoose";
import { IUser } from "../common/types";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  games: [
    {
      type: Schema.Types.ObjectId,
      required: false,
    },
  ],
  currentGame: {
    type: Schema.Types.ObjectId,
    required: false
  }
});

type UserType = IUser & mongoose.Document;

export default mongoose.model<UserType>("User", userSchema);
