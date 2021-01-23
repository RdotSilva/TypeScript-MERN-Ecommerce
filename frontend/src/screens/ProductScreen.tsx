import React from "react";
import { RouteComponentProps } from "react-router-dom";
import products from "../products";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const ProductScreen = ({ match }: Props) => {
  const product = products.find((product) => product._id === match.params.id);
  return <div>Product</div>;
};

export default ProductScreen;
