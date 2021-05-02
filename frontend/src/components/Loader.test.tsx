import { render } from "@testing-library/react";
import Loader from "./Loader.";

it("renders correctly", () => {
  const { queryByTestId } = render(<Loader />);

  expect(queryByTestId("spinner")).toBeTruthy();
});
