import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import Message from "../components/Message";
import { AppDispatch } from "../store";
import { ReduxState } from "../types/ReduxState";

interface Props {}

const PlaceOrderScreen = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const { cartItems, paymentMethod, shippingAddress } = useSelector(
    (state: ReduxState) => state.cart
  );

  // Helper
  const addDecimals = (num: number) => (Math.round(num * 100) / 100).toFixed(2);

  // Calculate items price, tax price, shipping price, total price
  const itemsPrice = Number(
    addDecimals(cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))
  );

  // Orders greater than $100 have free shipping, otherwise $10 shipping
  const shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 100);

  const taxPrice = addDecimals(0.15 * itemsPrice);

  const totalPrice = Number(
    Number(itemsPrice) + Number(shippingPrice) + Number(taxPrice)
  ).toFixed(2);

  const placeOrderHandler = () => {
    console.log("Order Placed");
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
