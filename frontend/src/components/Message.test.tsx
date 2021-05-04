import { render } from "@testing-library/react";
import Message from "./Message";

it("renders correctly", () => {
  const { queryByTestId } = render(<Message>Test</Message>);

  expect(queryByTestId("message-alert")).toBeTruthy();
});
