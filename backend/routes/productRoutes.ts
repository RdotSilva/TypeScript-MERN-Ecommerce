import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel";

/**
 * Fetch app products
 * @route GET /api/products
 * @access Public
 */
router.get(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const products = await Product.find({});
    res.json(products);
  })
);

/**
 * Fetch single product
 * @route GET /api/products/:id
 * @param id ID of
 * @access Public
 */
router.get(
  "/:id",
  asyncHandler(async (req: Request, res: Response) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default router;
