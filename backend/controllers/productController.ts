import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel";

/**
 * Fetch all products
 * @route GET /api/products
 * @access Public
 */
const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const products = await Product.find({});

  res.json(products);
});
