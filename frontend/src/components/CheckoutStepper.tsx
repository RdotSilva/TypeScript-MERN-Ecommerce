// @ts-ignore TODO: Fix type declaration file
import Stepper from "react-stepper-horizontal";

interface Props {
  currentStep: number;
}

/**
 * Horizontal stepper component used for the checkout process
 */
const CheckoutStepper = ({ currentStep }: Props) => {
  return (
    <Stepper
      steps={[
        { title: "Sign In" },
        { title: "Shipping" },
        { title: "Payment" },
        { title: "Place Order" },
      ]}
      activeStep={currentStep}
    />
  );
};

export default CheckoutStepper;
