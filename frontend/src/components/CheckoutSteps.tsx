import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

interface Props {
  stepOne?: boolean;
  stepTwo?: boolean;
  stepThree?: boolean;
  stepFour?: boolean;
}

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
      <Nav.Item>
        {stepOne ? (
          <LinkContainer to="/login">
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {stepTwo ? (
          <LinkContainer to="/shipping">
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {stepThree ? (
          <LinkContainer to="/payment">
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {stepFour ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
