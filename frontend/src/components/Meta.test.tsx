import { render } from "@testing-library/react";
import Meta from "./Meta";

it("should have default props", () => {
  const metaDefaultProps = Meta.defaultProps;

  expect(metaDefaultProps).toBeDefined;
  expect(metaDefaultProps.title).toEqual("TypeScript MERN E-Commerce");
  expect(metaDefaultProps.description).toEqual(
    "We sell the best items at the best prices"
  );
  expect(metaDefaultProps.keywords).toEqual(
    "store, ecommerce, buy items, best prices"
  );
});
