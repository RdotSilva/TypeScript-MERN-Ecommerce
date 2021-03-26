import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { listProducts } from "../actions/productActions";
import { AppDispatch } from "../store";
import { ReduxState } from "../types/ReduxState";

interface Props extends RouteComponentProps {}

const ProductListScreen = ({ history }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, products, error } = useSelector(
    (state: ReduxState) => state.productList
  );

  const { userInfo } = useSelector((state: ReduxState) => state.userLogin);

  /**
   * If user is Admin load products or redirect to login
   */
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus"></i>Create Product
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ProductListScreen;
