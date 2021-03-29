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

/**
 * Create a new product
 * @route POST /api/products
 * @access Private/Admin
 */
const createProduct = asyncHandler(async (req: Request, res: Response) => {
  const product = new Product({
    name: "Sample Name",
    price: 0,
    user: req.user?._id,
    image: "/images/sample.jpg",
    brand: "Sample Brand",
    category: "Sample Category",
    countInStock: 0,
    numReviews: 0,
    description: "Same Description",
  });

  const createdProduct = await product.save();
  res.status(201).json(product);
});

export { getProducts, getProductById, deleteProduct, createProduct };
