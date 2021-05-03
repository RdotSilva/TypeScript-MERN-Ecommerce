import { render } from "@testing-library/react";
import Loader from "./Loader.";

it("renders correctly", () => {
  const { queryByTestId } = render(<Loader />);

  expect(queryByTestId("spinner")).toBeTruthy();
});

it("renders correct text content", () => {
  const { queryByTestId } = render(<Loader />);
  const spinnerTextContent = queryByTestId("spinner")?.textContent;

  expect(spinnerTextContent).toEqual("Loading...");
});
