import { Model, Document } from "mongoose";

const mongoose = require("mongoose");

interface Review extends Document {
  name: string;
  rating: number;
  comment: string;
}

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true } // Automatically create "createdAt timestamp");
);

const Review: Model<Review> = mongoose.model("Review", reviewSchema);

export default Review;
