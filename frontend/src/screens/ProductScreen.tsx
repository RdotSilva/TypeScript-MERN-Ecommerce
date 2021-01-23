import React from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link, RouteComponentProps } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../products";
import { ProductType } from "../types";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const ProductScreen = ({ match }: Props) => {
  const product = products.find((product) => product._id === match.params.id);

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
        </Row>
      </>
    );
  }
};

export default ProductScreen;
