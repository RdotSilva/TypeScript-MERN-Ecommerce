import { Request as Req, Response as Res, NextFunction as Next } from "express";

/**
 * Custom User interface used in combination with Express Request / Response types
 */
interface User {
  user?: {
    _id: string;
    name: string;
    email: string;
    isAdmin?: boolean;
  };
}

/**
 * Combine Express types with customer User interface
 */
export type Request = Req & User;
export type Response = Res & User;
export type NextFunction = Next;
