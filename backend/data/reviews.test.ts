import reviews from "./reviews";

it("is an array", () => {
  expect(Array.isArray(reviews)).toBeTruthy();
});

it("contains 6 reviews", () => {
  expect(reviews.length).toEqual(6);
});
