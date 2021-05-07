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
