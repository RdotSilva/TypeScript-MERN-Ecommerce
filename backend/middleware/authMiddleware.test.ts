import { NextFunction, Request, Response } from "express";
import { protect } from "./authMiddleware";

describe("Authorization middleware", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
    };
  });

  test("without headers throws error", async () => {
    const expectedResponse = {
      error: "Not authorized, token failed",
    };
    protect(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.json).toBeCalledWith(expectedResponse);
  });
});
