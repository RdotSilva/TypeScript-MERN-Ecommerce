import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTopProducts } from "../actions/productActions";
import { ReduxState } from "../types/ReduxState";

interface Props {}

const ProductCarousel = (props: Props) => {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(
    (state: ReduxState) => state.productTopRated
  );

  /**
   * Fetch top products
   */
  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return <div>Product Carousel</div>;
};

export default ProductCarousel;
