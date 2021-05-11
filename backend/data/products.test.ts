import products from "./products";

it("is an array", () => {
  expect(Array.isArray(products)).toBeTruthy();
});

it("contains 6 products", () => {
  expect(products.length).toEqual(6);
});

it("each product has 9 properties", () => {
  const productsWithNineProperties = products.filter(
    (product) => Object.keys(product).length === 9
  );

  expect(productsWithNineProperties.length).toEqual(6);
});
