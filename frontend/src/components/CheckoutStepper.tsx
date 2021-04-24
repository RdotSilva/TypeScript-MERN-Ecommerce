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
      completeColor={"black"}
      activeColor={"#76d907"}
      size={55}
    />
  );
};

export default CheckoutStepper;
