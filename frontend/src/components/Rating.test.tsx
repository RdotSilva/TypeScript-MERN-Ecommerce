import { render } from "@testing-library/react";
import Rating from "./Rating";

it("renders correctly", () => {
  const { queryByTestId } = render(<Rating value={1} />);

  expect(queryByTestId("rating")).toBeTruthy();
});
