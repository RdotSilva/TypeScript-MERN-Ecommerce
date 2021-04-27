import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Review } from "../types";
import Rating from "./Rating";

interface Props {
  productReviews: Review[];
}

/**
 * Product Review Ratings component that shows total number of reviews based on the star rating
 */
const ProductReviewRatings = ({ productReviews }: Props) => {
  const [oneStarReviews, setOneStartReviews] = useState(0);
  const [twoStarReviews, setTwoStarReviews] = useState(0);
  const [threeStarReviews, setThreeStarReviews] = useState(0);
  const [fourStarReviews, setFourStarReviews] = useState(0);
  const [fiveStarReviews, setFiveStarReviews] = useState(0);

  /**
   * Populate the number of reviews per star
   */
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
      <h2>Product Ratings Overview</h2>
      {productReviews.map((review) => (
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Rating value={review.rating} />
            </ListGroup.Item>
            {review.rating === 1 ? (
              <ListGroup.Item>
                {oneStarReviews}
                {oneStarReviews > 1 ? "reviews" : "review"}
              </ListGroup.Item>
            ) : review.rating === 2 ? (
              <ListGroup.Item>
                {twoStarReviews} {twoStarReviews > 1 ? "reviews" : "review"}
              </ListGroup.Item>
            ) : review.rating === 3 ? (
              <ListGroup.Item>
                {threeStarReviews} {threeStarReviews > 1 ? "reviews" : "review"}
              </ListGroup.Item>
            ) : review.rating === 4 ? (
              <ListGroup.Item>
                {fourStarReviews} {fourStarReviews > 1 ? "reviews" : "review"}
              </ListGroup.Item>
            ) : (
              <ListGroup.Item>
                {fiveStarReviews} {fiveStarReviews > 1 ? "reviews" : "review"}
              </ListGroup.Item>
            )}
          </ListGroup>
        </Card>
      ))}
    </>
  );
};

export default ProductReviewRatings;
