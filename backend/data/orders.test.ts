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

it("each order has shipping address that contains 4 properties", () => {
  const ordersWithCorrectShippingAddressProperties = orders.filter(
    (order) => Object.keys(order.shippingAddress).length === 4
  );

  expect(ordersWithCorrectShippingAddressProperties.length).toEqual(3);
});
