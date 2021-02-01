import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel";

router.get(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default router;
