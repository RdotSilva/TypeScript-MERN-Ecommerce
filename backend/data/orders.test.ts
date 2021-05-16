import orders from "./orders";

it("is an array", () => {
  expect(Array.isArray(orders)).toBeTruthy();
});

it("contains 3 orders", () => {
  expect(orders.length).toEqual(3);
});

it("each order has 12 properties", () => {
  const ordersWithTwelveProperties = orders.filter(
    (order) => Object.keys(order).length === 12
  );

  expect(ordersWithTwelveProperties.length).toEqual(3);
});
