import { Product } from "./Product";

export interface ProductUpdateState {
  success?: boolean;
  product?: Product;
  loading?: boolean;
  error?: any;
}

export enum ProductUpdateActionTypes {
  PRODUCT_UPDATE_REQUEST = "PRODUCT_UPDATE_REQUEST",
  PRODUCT_UPDATE_SUCCESS = "PRODUCT_UPDATE_SUCCESS",
  PRODUCT_UPDATE_FAILURE = "PRODUCT_UPDATE_FAILURE",
  PRODUCT_UPDATE_RESET = "PRODUCT_UPDATE_RESET",
}
