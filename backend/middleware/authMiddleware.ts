import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import User from "../models/userModel";
import asyncHandler from "express-async-handler";

/**
 * Middleware used to protect routes from unauthorized users
 */
const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;

    const secret: Secret = process.env.JWT_SECRET!;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        const token = req.headers.authorization.split(" ")[1];

        const decoded = jwt.verify(token, secret);

        console.log(decoded);
      } catch (error) {}
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);

export { protect };
