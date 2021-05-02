import { render } from "@testing-library/react";
import SearchBox from "./SearchBox";

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<SearchBox />);

  expect(queryByTestId("search-box")).toBeTruthy();
  expect(queryByPlaceholderText("Searching...")).toBeTruthy();
});
