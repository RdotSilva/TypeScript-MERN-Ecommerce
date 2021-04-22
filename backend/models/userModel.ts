import bcrypt from "bcryptjs";
import { model, Schema } from "mongoose";
import { UserDocument } from "../types/";


const userSchema = new Schema(
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
  {
    timestamps: true, // Automatically create createdAt timestamp
  }
);

/**
 * Use Bcrypt to check that an entered password matches the password of a user
 * @param enteredPassword The password that a user enters
 */
userSchema.methods.matchPassword = async function (
  this: any,
  enteredPassword: string
) {
  return await bcrypt.compare(enteredPassword, this.password);
};

/**
 * Runs before the model saves and hecks to see if password has been
 * modified and hashes the password before saving to database
 */
userSchema.pre("save", async function (this: UserDocument, next) {
  if (!this.isModified("password")) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export const User = model<UserDocument>("User", userSchema);
