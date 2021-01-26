import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link, RouteComponentProps } from "react-router-dom";
import Rating from "../components/Rating";
import { ProductType } from "../types";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const ProductScreen = ({ match }: Props) => {
  const [product, setProduct] = useState<ProductType>();

  /**
   * Fetches a single product from the backend using id param and updates product state
   */
  const fetchProduct = async () => {
    const { data } = await axios.get(`/api/products/${match.params.id}`);
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (product === undefined) {
    return <>No Product Data</>;
  } else {
    return (
      <>
        <Link className="btn btn-light my-3" to="/">
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup.Item variant="flush">
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item variant="flush">
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item variant="flush">
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
};

export default ProductScreen;
