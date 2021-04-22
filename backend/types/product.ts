import { Model, Document } from "mongoose";

/**
 * Represents a product
 */
export interface Product {
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

/**
 * Represents a product review
 */
export interface Review {
  user: string;
  name: string;
  rating: number;
  comment: string;
}

/**
 * Represents a product w/ reviews
 */
interface ProductInDatabase extends Product {
  user: string;
  reviews: Review[];
}

export interface ProductDocument extends ProductInDatabase, Document {}

export interface ProductModel extends Model<ProductDocument> {}
