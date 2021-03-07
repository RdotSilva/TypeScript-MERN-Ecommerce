import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { AppDispatch } from "../store";
import { ReduxState } from "../types/ReduxState";

interface Props {}

const PlaceOrderScreen = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const { cartItems, paymentMethod, shippingAddress } = useSelector(
    (state: ReduxState) => state.cart
  );

  return (
    <>
      <CheckoutSteps stepOne stepTwo stepThree stepFour />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {shippingAddress?.address}, {shippingAddress?.city}{" "}
                {shippingAddress?.postalCode} {shippingAddress?.country}
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
