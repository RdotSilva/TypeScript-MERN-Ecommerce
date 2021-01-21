import React from "react";
import { Col, Row } from "react-bootstrap";
import products from "../products";
import { Product } from "../types";

interface Props {}

const HomeScreen = (props: Props) => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product: Product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <h3>{product.name}</h3>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
