import { render } from "@testing-library/react";
import Rating from "./Rating";

it("renders correctly", () => {
  const { queryByTestId } = render(<Rating value={1} />);

  expect(queryByTestId("rating")).toBeTruthy();
});

it("should contain a child span element", () => {
  const { queryByTestId } = render(<Rating value={5} />);

  expect(queryByTestId("rating-span")).toBeTruthy();
});

it("one star review should have one star image class name", () => {
  const { container } = render(<Rating value={1} />);

  expect(
    container.firstElementChild?.firstElementChild?.firstElementChild?.className
  ).toBe("fas fa-star");
});

it("half star review should have half star image class name", () => {
  const { container } = render(<Rating value={0.5} />);

  const halfStarRatingImage = container.getElementsByTagName("span")[0]
    .firstChild;

  expect(halfStarRatingImage?.className).toBe("fas fa-star-half-alt");
});

it("should have default props", () => {
  const ratingDefaultProps = Rating.defaultProps;

  expect(ratingDefaultProps).toBeDefined;
  expect(ratingDefaultProps.color).toEqual("#f8e825");
});
