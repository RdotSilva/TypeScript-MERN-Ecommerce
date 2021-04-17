import React, { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listTopProducts } from "../actions/productActions";
import { ReduxState } from "../types/ReduxState";
import Loader from "./Loader.";
import Message from "./Message";

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

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-dark">
      
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
