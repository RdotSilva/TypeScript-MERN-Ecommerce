import { render } from "@testing-library/react";
import CheckoutStepper from "./CheckoutStepper";

it("renders correctly", () => {
  const { queryByTestId } = render(<CheckoutStepper currentStep={3} />);

  expect(queryByTestId("checkout-stepper")).toBeTruthy();
});
