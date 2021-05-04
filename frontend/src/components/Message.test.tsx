import { render } from "@testing-library/react";
import Message from "./Message";

it("renders correctly", () => {
  const { queryByTestId } = render(<Message>Test</Message>);

  expect(queryByTestId("message-alert")).toBeTruthy();
});

it("renders single child properly", () => {
  const { container } = render(<Message>Test</Message>);

  expect(container.children.length).toBe(1);
});

it("should have default variant prop", () => {
  const variantDefaultProps = Message.defaultProps.variant;

  expect(variantDefaultProps).toBeDefined;
  expect(variantDefaultProps).toEqual("info");
});
