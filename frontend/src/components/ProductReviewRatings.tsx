import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Review } from "../types";
import Rating from "./Rating";

interface Props {
  productReviews: Review[];
}

const ProductReviewRatings = ({ productReviews }: Props) => {
  return (
    <>
      {productReviews.map((review) => (
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Rating value={review.rating} />
            </ListGroup.Item>
            <ListGroup.Item>{productReviews.length}</ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </>
  );
};

export default ProductReviewRatings;
