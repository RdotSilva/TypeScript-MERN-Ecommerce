import products from "./products";

it("is an array", () => {
  expect(Array.isArray(products)).toBeTruthy();
});

it("contains 6 products", () => {
  expect(products.length).toEqual(6);
});
