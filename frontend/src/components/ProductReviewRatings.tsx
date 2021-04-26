import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Review } from "../types";
import Rating from "./Rating";

interface Props {
  productReviews: Review[];
}

const ProductReviewRatings = ({ productReviews }: Props) => {
  const [oneStarReviews, setOneStartReviews] = useState(0);
  const [twoStarReviews, setTwoStarReviews] = useState(0);
  const [threeStarReviews, setThreeStarReviews] = useState(0);
  const [fourStarReviews, setFourStarReviews] = useState(0);
  const [fiveStarReviews, setFiveStarReviews] = useState(0);

  useEffect(() => {
    productReviews.forEach((review) => {
      switch (review.rating) {
        case 1:
          setOneStartReviews(oneStarReviews + 1);
          break;
        case 2:
          setTwoStarReviews(twoStarReviews + 1);
          break;
        case 3:
          setThreeStarReviews(threeStarReviews + 1);
          break;
        case 4:
          setFourStarReviews(fourStarReviews + 1);
          break;
        case 5:
          setFiveStarReviews(fiveStarReviews + 1);
          break;
      }
    });
  }, []);

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
