import { Model, Document } from "mongoose";

const mongoose = require("mongoose");

interface User extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true } // Automatically create "createdAt timestamp"
);

const User: Model<User> = mongoose.model("User", userSchema);

export default User;
