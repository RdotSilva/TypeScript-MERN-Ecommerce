import { Product } from "./Product";

export interface ProductCreateState {
  success?: boolean;
  product?: Product;
  loading?: boolean;
  error?: any;
}

export enum ProductCreateActionTypes {
  PRODUCT_CREATE_REQUEST = "PRODUCT_CREATE_REQUEST",
  PRODUCT_CREATE_SUCCESS = "PRODUCT_CREATE_SUCCESS",
  PRODUCT_CREATE_FAILURE = "PRODUCT_CREATE_FAILURE",
  PRODUCT_CREATE_RESET = "PRODUCT_CREATE_RESET",
}
