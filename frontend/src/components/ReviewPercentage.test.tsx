import ReactDOM from "react-dom";
import { getByTestId, getByText, render, screen } from "@testing-library/react";
import ReviewPercentage from "./ReviewPercentage";
import { Dropdown } from "react-bootstrap";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ReviewPercentage />, div);
});

it("renders review", () => {
  const { getByText } = render(
    <ReviewPercentage reviewsPerStar={1} totalReviews={2} />
  );
  expect(getByText("review")).toBeVisible();
});
