import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Product } from "../models/";

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
 * @param id ID of product to fetch
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

/**
 * Delete single product
 * @route DELETE /api/products/:id
 * @param id ID of product to delete
 * @access Private/Admin
 */
const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById, deleteProduct };
