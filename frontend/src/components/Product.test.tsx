import { render } from "@testing-library/react";
import { Product as ProductType } from "../types";
import Product from "./Product";
import { MemoryRouter } from "react-router-dom";

const testProduct: ProductType = {
  _id: "12345",
  name: "Test Product",
  image: "/images/sample.jpg",
  description: "Test Product",
  brand: "Test Brand",
  category: "Test Category",
  price: 20,
  countInStock: 5,
  rating: 5,
  numReviews: 10,
  reviews: [],
};

it("renders correctly", () => {
  const { queryByTestId } = render(
    <MemoryRouter>
      <Product product={testProduct} />
    </MemoryRouter>
  );

  expect(queryByTestId("product-card")).toBeTruthy();
});
