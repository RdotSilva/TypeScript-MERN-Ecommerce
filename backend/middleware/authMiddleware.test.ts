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

  test('with "authorization" header calls next function', async () => {
    mockRequest = {
      headers: {
        authorization: "Bearer 1234d1234",
      },
    };
    protect(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(nextFunction).toBeCalledTimes(1);
  });
});
