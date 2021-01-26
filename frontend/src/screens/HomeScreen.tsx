import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

import { ProductType } from "../types";

interface Props {}

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState([]);

  /**
   * Fetches all products from the backend
   */
  const fetchProducts = async () => {
    const { data } = await axios.get("/api/products");

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product: ProductType) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
