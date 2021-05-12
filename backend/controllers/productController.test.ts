const request = require("supertest");
const express = require("express");
const productRoutes = require("../routes/productRoutes");

const app = express();

app.use(express.json());

app.use("/api/products/", productRoutes);
