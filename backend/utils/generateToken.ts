import jwt from "jsonwebtoken";

/**
 * Generate a json web token for a user
 * @param id The id of the user
 */
const generateToken = (id: string) => {
  if (process.env.JWT_TOKEN !== undefined) {
    return jwt.sign({ id }, process.env.JWT_TOKEN, {
      expiresIn: "30d",
    });
  }
};

export default generateToken;
