import { Product } from "./";

export interface ProductDetailsState {
  loading: boolean;
  product?: Product;
  error?: undefined;
}

export enum ProductDetailsActionTypes {
  PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST",
  PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS",
  PRODUCT_DETAILS_FAILURE = "PRODUCT_DETAILS_FAILURE",
}

export interface FetchProductRequestAction {
  type: ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST;
}

export interface FetchProductSuccessAction {
  type: ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS;
  payload: Product;
}

export interface FetchProductFailureAction {
  type: ProductDetailsActionTypes.PRODUCT_DETAILS_FAILURE;
  payload: any;
}

export type ProductDetailsAction =
  | FetchProductSuccessAction
  | FetchProductFailureAction
  | FetchProductRequestAction;
