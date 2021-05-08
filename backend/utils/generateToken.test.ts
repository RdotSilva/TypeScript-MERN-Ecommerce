import generateToken from "./generateToken";

it("generates a token", () => {
  const token = generateToken("TESTID12345");
  expect(token).toBeTruthy();
});
