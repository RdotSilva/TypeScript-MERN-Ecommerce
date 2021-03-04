import React, { useState } from "react";
import FormContainer from "../components/FormContainer";

interface Props {}

const ShippingScreen = ({ history }: Props) => {
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  return (
    <FormContainer>
      <h1>Shipping</h1>
    </FormContainer>
  );
};

export default ShippingScreen;
