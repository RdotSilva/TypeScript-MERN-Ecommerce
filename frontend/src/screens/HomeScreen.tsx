import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader.";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import Product from "../components/Product";
import ProductCarousel from "../components/ProductCarousel";
import { AppDispatch } from "../store";

import { ProductType } from "../types";
import { ReduxState } from "../types/ReduxState";

interface MatchParams {
  keyword: string;
  pageNumber: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const HomeScreen = ({ match }: Props) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || "1";

  const dispatch = useDispatch<AppDispatch>();

  const { products, loading, error, page, pages } = useSelector(
    (state: ReduxState) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      {!keyword && <ProductCarousel />}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : !products ? (
        <Message variant="danger">No Products Currently Available</Message>
      ) : (
        <>
          <Row>
            {products.map((product: ProductType) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          {pages && page && (
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          )}
        </>
      )}
    </>
  );
};

export default HomeScreen;
