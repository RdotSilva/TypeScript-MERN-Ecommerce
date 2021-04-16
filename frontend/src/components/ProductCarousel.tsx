import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../types/ReduxState";

interface Props {}

const ProductCarousel = (props: Props) => {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(
    (state: ReduxState) => state.productTopRated
  );
  
  return <div>Product Carousel</div>;
};

export default ProductCarousel;
