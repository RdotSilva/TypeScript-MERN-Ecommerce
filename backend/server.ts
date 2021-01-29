import express from "express";
import products from "./data/products";
import dotenv from "dotenv";
import { Request, Response } from "express";
import connectDB from "./config/db";
import { ProductType } from "./types";

dotenv.config();

const app = express();

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("API IS RUNNING...");
});

app.get("/api/products", (req: Request, res: Response) => {
  res.json(products);
});

app.get("/api/products/:id", (req: Request, res: Response) => {
  const product = products.find(
    (product: ProductType) => product._id === req.params.id
  );
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
