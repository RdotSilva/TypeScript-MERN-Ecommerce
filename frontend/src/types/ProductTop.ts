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

export interface ProductTopRequestAction {
  type: ProductTopActionTypes.PRODUCT_TOP_REQUEST;
}

export interface ProductTopSuccessAction {
  type: ProductTopActionTypes.PRODUCT_TOP_SUCCESS;
  payload: Product[];
}

export interface ProductTopFailureAction {
  type: ProductTopActionTypes.PRODUCT_TOP_FAILURE;
  payload: any;
}

export type ProductTopAction =
  | ProductTopSuccessAction
  | ProductTopFailureAction
  | ProductTopRequestAction;
