import users from "./users";

it("is an array", () => {
  expect(Array.isArray(users)).toBeTruthy();
});

it("contains 4 users", () => {
  expect(users.length).toEqual(4);
});

it("each user has 4 properties", () => {
  const usersWithFourProperties = users.filter(
    (product) => Object.keys(product).length === 4
  );

  expect(usersWithFourProperties.length).toEqual(4);
});
