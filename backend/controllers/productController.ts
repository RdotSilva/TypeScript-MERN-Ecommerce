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

/**
 * Fetch single product
 * @route GET /api/products/:id
 * @param id ID of
 * @access Public
 */
const getProductById = asyncHandler(async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById };
