import users from "./users";

it("is an array", () => {
  expect(Array.isArray(users)).toBeTruthy();
});

it("contains 4 users", () => {
  expect(users.length).toEqual(4);
});
