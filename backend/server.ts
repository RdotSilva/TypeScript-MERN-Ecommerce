import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import { notFound, errorHandler } from "./middleware/errorMiddleware";

// Routes
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware to accept JSON in body
app.use(express.json());

dotenv.config();

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("API IS RUNNING...");
});

app.use("/api/products/", productRoutes);
app.use("/api/users", userRoutes);

// Use Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
