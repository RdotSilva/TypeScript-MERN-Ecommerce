import express from "express";
import dotenv from "dotenv";
import { Request, Response } from "express";
import connectDB from "./config/db";
import productRoutes from "./routes/productRoutes";

dotenv.config();

const app = express();

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("API IS RUNNING...");
});

app.use("/api/products/", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
