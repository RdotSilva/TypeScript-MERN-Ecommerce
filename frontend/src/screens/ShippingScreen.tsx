import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import FormContainer from "../components/FormContainer";

interface Props extends RouteComponentProps {}

const ShippingScreen = ({ history }: Props) => {
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
