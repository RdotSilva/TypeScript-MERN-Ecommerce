const request = require("supertest");
const express = require("express");
const productRoutes = require("../routes/productRoutes");

const app = express();

app.use(express.json());

app.use("/api/products/", productRoutes);

describe("GET /api/products", () => {
  it("responds with 200", (done) => {
    request(app)
      .get("/api/products")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});
