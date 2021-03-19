import { NextFunction, Request, Response } from "../types/express";
import jwt, { Secret } from "jsonwebtoken";
import { User } from "../models/";
import asyncHandler from "express-async-handler";

interface Decoded {
  id: string;
  iat: Date;
  exp: Date;
}

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
        token = req.headers.authorization.split(" ")[1];

        const decoded = jwt.verify(token, secret) as Decoded;

        req.user = await User.findById(decoded.id).select("-password");
        next();
      } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error("Not authorized, token failed");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);

/**
 * Middleware used to protect routes from users who are not flagged as admin
 */
const admin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

export { protect, admin };
