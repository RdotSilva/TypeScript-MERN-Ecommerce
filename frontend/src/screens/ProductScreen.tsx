import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link, RouteComponentProps } from "react-router-dom";
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
            <Image src={product.image} alt={product.name} />
          </Col>
          <Col md={3}></Col>
        </Row>
      </>
    );
  }
};

export default ProductScreen;
