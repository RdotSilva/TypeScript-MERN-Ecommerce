const request = require("supertest");
const express = require("express");
const paypalRoutes = require("../routes/paypalRoutes");

const app = express;

app.use("/api/config/paypal", paypalRoutes);

describe("GET /api/config/paypal", () => {
  it("responds with json", (done) => {
    request(app)
      .get("/api/config/paypal")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
