import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader.";
import Message from "../components/Message";
import Product from "../components/Product";
import { RootState } from "../store";

import { ProductType } from "../types";

interface Props {}

const HomeScreen = (props: Props) => {
  const dispatch = useDispatch();

  const productList = useSelector((state: RootState) => state.productList);

  const {
    loading,
    error,
    products,
  }: { loading: boolean; error: Error; products: ProductType[] } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product: ProductType) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
