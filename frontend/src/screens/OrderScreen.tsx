import { useEffect } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import { getOrderDetails } from "../actions/orderActions";
import Message from "../components/Message";
import { AppDispatch } from "../store";
import { ReduxState } from "../types/ReduxState";

interface Props extends RouteComponentProps {}

const OrderScreen = ({ match }: Props) => {
  const orderId = match.params.id;

  const dispatch = useDispatch<AppDispatch>();

  const { cartItems, paymentMethod, shippingAddress } = useSelector(
    (state: ReduxState) => state.cart
  );

  const { order, loading, error } = useSelector(
    (state: ReduxState) => state.orderDetails
  );

  /**
   * Redirect to order screen if order is successful
   */
  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, []);

  return <div>Order Screen</div>;
};

export default OrderScreen;
