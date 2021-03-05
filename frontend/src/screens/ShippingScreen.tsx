import React, { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { saveShippingAddress } from "../actions/cartActions";
import FormContainer from "../components/FormContainer";
import { ReduxState } from "../types/ReduxState";

interface Props extends RouteComponentProps {}

const ShippingScreen = ({ history }: Props) => {
  const { shippingAddress } = useSelector((state: ReduxState) => state.cart);

  const [address, setAddress] = useState<string>(
    shippingAddress ? shippingAddress.address : ""
  );
  const [city, setCity] = useState<string>(
    shippingAddress ? shippingAddress.city : ""
  );
  const [postalCode, setPostalCode] = useState<string>(
    shippingAddress ? shippingAddress.postalCode : ""
  );
  const [country, setCountry] = useState<string>(
    shippingAddress ? shippingAddress.country : ""
  );

  const dispatch = useDispatch();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Save shipping address");
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };

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
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="postalCode">
          <Form.Label>postalCode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
