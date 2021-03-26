import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { ReduxState } from "../types/ReduxState";

interface Props {}

const ProductListScreen = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, products, error } = useSelector(
    (state: ReduxState) => state.productList
  );

  const { userInfo } = useSelector((state: ReduxState) => state.userLogin);

  return <div>Product List Screen</div>;
};

export default ProductListScreen;
