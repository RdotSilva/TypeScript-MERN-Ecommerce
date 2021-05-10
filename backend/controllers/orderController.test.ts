const request = require("supertest");
const express = require("express");
const orderRoutes = require("../routes/orderRoutes");

const app = express();

app.use(express.json());

app.use("/api/orders/", orderRoutes);

describe("GET /api/orders/myorders", () => {
  it("responds with 200", (done) => {
    request(app)
      .get("/api/orders/myorders")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});

describe("POST /api/orders/s", () => {
  it("responds with 200", (done) => {
    request(app)
      .get("/api/orders/")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});
