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

// describe("POST /api/config/paypal", () => {
//   it("responds with 404", (done) => {
//     request(app)
//       .post("/api/config/paypal")
//       .set("Accept", "application/json")
//       .expect(404, done);
//   });
// });

// describe("PUT /api/config/paypal", () => {
//   it("responds with 404", (done) => {
//     request(app)
//       .put("/api/config/paypal")
//       .set("Accept", "application/json")
//       .expect(404, done);
//   });
// });
