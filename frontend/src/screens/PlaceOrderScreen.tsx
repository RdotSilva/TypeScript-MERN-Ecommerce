import { useEffect } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import { createOrder } from "../actions/orderActions";
import CheckoutSteps from "../components/CheckoutSteps";
import Message from "../components/Message";
import { AppDispatch } from "../store";
import { ReduxState } from "../types/ReduxState";

interface Props extends RouteComponentProps {}

const PlaceOrderScreen = ({ history }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const { cartItems, paymentMethod, shippingAddress } = useSelector(
    (state: ReduxState) => state.cart
  );

  const { order, success, error } = useSelector(
    (state: ReduxState) => state.orderCreate
  );

  /**
   * Redirect to order screen if order is successful
   */
  useEffect(() => {
    if (success && order) history.push(`/order/${order._id}`);
  }, [history, order, success]);

  /**
   * Format a number using decimals and include trailing zeros
   * @param num Number to add decimals to
   */
  const addDecimals = (num: number) => (Math.round(num * 100) / 100).toFixed(2);

  // Total amount of ALL items in cart without taxes/shipping
  const itemsPrice = Number(
    addDecimals(cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))
  );

  // Orders over $100 have free shipping, anything below that is $10 flat shipping
  const shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 100);

  const taxPrice = addDecimals(0.15 * itemsPrice);

  // Total price including shipping & taxes
  const totalPrice = Number(
    Number(itemsPrice) + Number(shippingPrice) + Number(taxPrice)
  ).toFixed(2);

  // Check if user has shipping address & payment method, if not redirect to page to update
  if (!shippingAddress) {
    history.push("/shipping");
    return null;
  }
  if (!paymentMethod) {
    history.push("/payment");
    return null;
  }

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice: parseFloat(shippingPrice),
        taxPrice: parseFloat(taxPrice),
        totalPrice: parseFloat(totalPrice),
      })
    );
  };

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
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method:</strong>
              {paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cartItems.map((cartItem, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={cartItem.image}
                            alt={cartItem.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${cartItem.product}`}>
                            {cartItem.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {cartItem.qty} x {cartItem.price} = $
                          {cartItem.qty * cartItem.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
