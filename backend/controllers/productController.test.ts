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

describe("GET /api/products/:id", () => {
  it("responds with 200", (done) => {
    request(app)
      .get("/api/products/606261b8b81e2856b83e05c5")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});

describe("DELETE /api/products", () => {
  it("responds with 200", (done) => {
    request(app)
      .delete("/api/products")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});

describe("POST /api/products", () => {
  it("responds with 200", (done) => {
    request(app)
      .post("/api/products")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});
