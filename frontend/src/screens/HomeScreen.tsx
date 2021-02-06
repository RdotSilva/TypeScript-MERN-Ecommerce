import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Product from "../components/Product";
import { RootState } from "../store";

import { ProductType } from "../types";

interface Props {}

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const productList = useSelector((state: RootState) => state.productList);

  /**
   * Fetches all products from the backend
   */
  const fetchProducts = async () => {
    dispatch(listProducts());

    const { loading, error, products } = productList;

    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

  //TODO: Fix loading issue. Might have to temporarily remove loading text and revert back to previous code.

  return (
    <>
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
