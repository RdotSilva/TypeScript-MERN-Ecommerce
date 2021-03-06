import React, { FormEvent, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { AppDispatch } from "../store";
import { ReduxState } from "../types/ReduxState";

interface Props extends RouteComponentProps {}

const PaymentScreen = ({ history }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { shippingAddress } = useSelector((state: ReduxState) => state.cart);

  const [paymentMethod, setPaymentMethod] = useState<string>("PayPal");

  return <div>Payment Screen</div>;
};

export default PaymentScreen;
