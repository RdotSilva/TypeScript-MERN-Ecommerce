import { FormEvent, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import FormContainer from "../components/FormContainer";
import Meta from "../components/Meta";
import { AppDispatch } from "../store";
import { ReduxState } from "../types/ReduxState";

interface Props extends RouteComponentProps {}

/**
 * Component that contains the form for a user to select a payment method
 */
const PaymentScreen = ({ history }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { shippingAddress } = useSelector((state: ReduxState) => state.cart);

  // Bring user back to shipping screen if they haven't provided an address
  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState<string>("PayPal");

  /**
   * Save users shipping address to payment method and send them to the place order screen
   * @param e HTML event form element
   */
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <>
      <Meta title="Payment Method" />
      <FormContainer>
        <CheckoutSteps stepThree />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as="legend">Select Payment Method</Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="PayPal or Credit Card"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
              <Form.Check
                type="radio"
                label="Stripe"
                id="Stripe"
                name="paymentMethod"
                value="Stripe"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
          </Form.Group>
          <Link to="/shipping" className="btn btn-dark">
            Back
          </Link>
          <Button type="submit" variant="primary" className="ml-3">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default PaymentScreen;
