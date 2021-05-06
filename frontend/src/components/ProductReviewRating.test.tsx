import { render } from "@testing-library/react";
import { Review } from "../types";
import ProductReviewRatings from "./ProductReviewRatings";

const mockProductReviews: Review[] = [];

it("renders correctly", () => {
  const { queryByTestId } = render(
    <ProductReviewRatings productReviews={mockProductReviews} />
  );

  expect(queryByTestId("rating-overview")).toBeTruthy();
});
