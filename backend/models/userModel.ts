import bcrypt from "bcryptjs";
import { Model, Document } from "mongoose";
import { NextFunction } from "../types/express";

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

/**
 * Use Bcrypt to check that an entered password matches the password of a user
 * @param enteredPassword The password that a user enters
 */
userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

/**
 * Runs before the model saves and hecks to see if password has been
 * modified and hashes the password before saving to database
 * @param enteredPassword The password that a user enters
 */
userSchema.pre("save", async function (this: User, next: NextFunction) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User: Model<User> = mongoose.model("User", userSchema);

export default User;
