import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Review } from "../types";
interface Props {
  productReviews?: Review[];
  totalReviews?: number;
  reviewsPerStar?: number;
}

const ReviewPercentage = ({ reviewsPerStar, totalReviews }: Props) => {
  /**
   * Calculates the total percentage of reviews per star based on the total reviews
   */
  const calculateReviewRatingPercentage = (
    reviewsPerRating: number,
    totalReviews: number
  ) => {
    return Math.round((100 * reviewsPerRating) / totalReviews);
  };

  return (
    <Dropdown.Item>
      {reviewsPerStar}
      {reviewsPerStar! > 1
        ? ` reviews (${calculateReviewRatingPercentage(
            reviewsPerStar!,
            totalReviews!
          )}%)`
        : ` review (${calculateReviewRatingPercentage(
            reviewsPerStar!,
            totalReviews!
          )}%)`}
    </Dropdown.Item>
  );
};

export default ReviewPercentage;
