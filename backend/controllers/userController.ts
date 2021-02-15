import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/userModel";

/**
 * Authenticate user and get token
 * @route POST /api/users/login
 * @access Public
 */
const authUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // TODO: Enable user authentication
});
