import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Review } from "../types";
import Rating from "./Rating";
import ReviewPercentage from "./ReviewPercentage";

interface Props {
  productReviews: Review[];
}

/**
 * Product Review Ratings component that shows total number of reviews based on the star rating
 */
const ProductReviewRatings = ({ productReviews }: Props) => {
  const [oneStarReviews, setOneStarReviews] = useState(0);
  const [twoStarReviews, setTwoStarReviews] = useState(0);
  const [threeStarReviews, setThreeStarReviews] = useState(0);
  const [fourStarReviews, setFourStarReviews] = useState(0);
  const [fiveStarReviews, setFiveStarReviews] = useState(0);

  const uniqueReviewsByRating: Review[] = Object.values(
    productReviews.reduce(
      (acc, cur) => Object.assign(acc, { [cur.rating]: cur }),
      {}
    )
  );

  /**
   * Populate the number of reviews per star
   */
  useEffect(() => {
    productReviews.forEach((review) => {
      switch (review.rating) {
        case 1:
          setOneStarReviews((prevOneStarReviews) => prevOneStarReviews + 1);
          break;
        case 2:
          setTwoStarReviews((prevTwoStarReviews) => prevTwoStarReviews + 1);
          break;
        case 3:
          setThreeStarReviews(
            (prevThreeStarReviews) => prevThreeStarReviews + 1
          );
          break;
        case 4:
          setFourStarReviews((prevFourStarReviews) => prevFourStarReviews + 1);
          break;
        case 5:
          setFiveStarReviews((prevFiveStarReviews) => prevFiveStarReviews + 1);
          break;
      }
    });
  }, []);

  const renderReviewRatings = (review: Review) => {
    switch (review.rating) {
      case 1:
        return (
          <ReviewPercentage
            reviewsPerStar={oneStarReviews}
            totalReviews={productReviews.length}
          />
        );
      case 2:
        return (
          <ReviewPercentage
            reviewsPerStar={twoStarReviews}
            totalReviews={productReviews.length}
          />
        );
      case 3:
        return (
          <ReviewPercentage
            reviewsPerStar={threeStarReviews}
            totalReviews={productReviews.length}
          />
        );
      case 4:
        return (
          <ReviewPercentage
            reviewsPerStar={fourStarReviews}
            totalReviews={productReviews.length}
          />
        );
      case 5:
        return (
          <ReviewPercentage
            reviewsPerStar={fiveStarReviews}
            totalReviews={productReviews.length}
          />
        );
    }
  };

  return (
    <>
      <h2>Product Ratings Overview</h2>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Product Reviews
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {uniqueReviewsByRating.map((review) => (
            <div>
              <Dropdown.Item>
                <Rating value={review.rating} />
              </Dropdown.Item>
              {renderReviewRatings(review)}
            </div>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default ProductReviewRatings;
