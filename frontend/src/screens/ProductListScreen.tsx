import React, { useEffect } from "react";
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

  return <div>Product List Screen</div>;
};

export default ProductListScreen;
