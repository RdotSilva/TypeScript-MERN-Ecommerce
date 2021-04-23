import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CheckoutStepper from "./CheckoutStepper";

interface Props {
  stepOne?: boolean;
  stepTwo?: boolean;
  stepThree?: boolean;
  stepFour?: boolean;
}

const renderCheckoutSteps = (
  stepTwo?: boolean,
  stepThree?: boolean,
  stepFour?: boolean
) => {
  if (stepTwo) {
    return <CheckoutStepper currentStep={1} />;
  } else if (stepThree) {
    return <CheckoutStepper currentStep={2} />;
  } else if (stepFour) {
    return <CheckoutStepper currentStep={3} />;
  }
};

/**
 * Component that renders checkout links based on which step a user is in the checkout process
 * @param stepOne Represents user at the signed in level
 * @param stepTwo Represents a user at the shipping address level
 * @param stepThree Represents a user at the payment level
 * @param stepFour Represent a user at the place order level
 */
const CheckoutSteps = ({ stepOne, stepTwo, stepThree, stepFour }: Props) => {
  return (
    // TODO: Replace this nav link logic with a horizontal stepper
    <Nav className="justify-content-center mb-4">
      {renderCheckoutSteps(stepTwo, stepThree, stepFour)}
    </Nav>
  );
};

export default CheckoutSteps;
