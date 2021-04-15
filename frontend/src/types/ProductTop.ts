import { Product } from "./";

export interface ProductTopState {
  products: Product[];
  loading?: boolean;
  error?: undefined;
}

export enum ProductTopActionTypes {
  PRODUCT_TOP_REQUEST = "PRODUCT_TOP_REQUEST",
  PRODUCT_TOP_SUCCESS = "PRODUCT_TOP_SUCCESS",
  PRODUCT_TOP_FAILURE = "PRODUCT_TOP_FAILURE",
}
