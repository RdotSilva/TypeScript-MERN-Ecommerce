const express = require("express");
const products = require("./data/products");
const dotenv = require("dotenv");
import connectDB from "./config/db";

dotenv.config();

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("API IS RUNNING...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
