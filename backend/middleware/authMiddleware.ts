import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

/**
 * Middleware used to protect routes from unauthorized users
 */
const protect = async (req: Request, res: Response, next: NextFunction) => {
  let token;
  console.log(req.headers.authorization);
  next();
  // TODO: Implement auth protect middleware to protect routes
};

export { protect };
