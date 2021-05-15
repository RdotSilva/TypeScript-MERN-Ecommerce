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

it("password is being hashed", () => {
  const usersWithHashedPassword = users.filter(
    (user) => user.password === "123456"
  );

  expect(usersWithHashedPassword.length).toEqual(0);
});

it("contains only one admin account", () => {
  const totalAdmins = users.filter((user) => user.isAdmin === true);

  expect(totalAdmins.length).toEqual(1);
});

it("contains users with valid email addresses", () => {
  const usersWithValidEmails = users.filter((user) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/.test(user.email)
  );

  expect(usersWithValidEmails.length).toEqual(4);
});
