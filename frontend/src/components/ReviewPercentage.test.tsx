import ReactDOM from "react-dom";
import {
  getByTestId,
  getByText,
  render,
  screen,
  container,
} from "@testing-library/react";
import ReviewPercentage from "./ReviewPercentage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ReviewPercentage />, div);
});

it("renders review", () => {
  const { getByText } = render(
    <ReviewPercentage reviewsPerStar={1} totalReviews={2} />
  );
  expect(getByText("review")).toBeInTheDocument;
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
