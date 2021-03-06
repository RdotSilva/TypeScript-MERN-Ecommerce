import ReactDOM from "react-dom";
import {
  getByTestId,
  getByText,
  render,
  screen,
  container,
  getByRole,
} from "@testing-library/react";
import ReviewPercentage from "./ReviewPercentage";

it("renders correctly", () => {
  const { queryByTestId } = render(<ReviewPercentage />);

  expect(queryByTestId("review-dropdown")).toBeTruthy();
});

/**
 * Div with a class of rating should have 6 span children
 */
it("renders star image", () => {
  const { getByText } = render(
    <ReviewPercentage reviewsPerStar={1} totalReviews={2} />
  );
  expect(container.firstChild).toHaveClass("rating");
});

/**
 * Product Review dropdown link is rendered
 */
it("renders product reviews dropdown link", () => {
  const { getByText } = render(
    <ReviewPercentage reviewsPerStar={1} totalReviews={2} />
  );
  expect(getByRole("link")).toBeVisible();
});
