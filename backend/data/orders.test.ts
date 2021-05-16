import orders from "./orders";

it("is an array", () => {
  expect(Array.isArray(orders)).toBeTruthy();
});

it("contains 3 orders", () => {
  expect(orders.length).toEqual(3);
});
