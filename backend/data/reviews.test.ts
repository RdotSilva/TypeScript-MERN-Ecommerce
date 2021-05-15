import reviews from "./reviews";

it("is an array", () => {
  expect(Array.isArray(reviews)).toBeTruthy();
});

it("contains 6 reviews", () => {
  expect(reviews.length).toEqual(6);
});

it("each review has 4 properties", () => {
  const reviewsWithFourProperties = reviews.filter(
    (review) => Object.keys(review).length === 4
  );

  expect(reviewsWithFourProperties.length).toEqual(6);
});
