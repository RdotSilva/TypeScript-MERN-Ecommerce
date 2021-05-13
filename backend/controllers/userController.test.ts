const request = require("supertest");
const express = require("express");
const userRoutes = require("../routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/api/users/", userRoutes);

describe("POST /api/users/login", () => {
  it("responds with 200", (done) => {
    request(app)
      .post("/api/users/login")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});

describe("POST /api/users", () => {
  it("responds with 200", (done) => {
    request(app)
      .post("/api/users")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});

describe("GET /api/users/profile", () => {
  it("responds with 200", (done) => {
    request(app)
      .get("/api/users/profile")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});
