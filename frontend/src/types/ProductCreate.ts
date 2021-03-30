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

export interface ProductCreateRequestAction {
  type: ProductCreateActionTypes.PRODUCT_CREATE_REQUEST;
}

export interface ProductCreateSuccessAction {
  type: ProductCreateActionTypes.PRODUCT_CREATE_SUCCESS;
  payload: Product;
}

export interface ProductCreateFailureAction {
  type: ProductCreateActionTypes.PRODUCT_CREATE_FAILURE;
  payload: any;
}

export interface ProductCreateResetAction {
  type: ProductCreateActionTypes.PRODUCT_CREATE_RESET;
}

export type ProductCreateAction =
  | ProductCreateRequestAction
  | ProductCreateSuccessAction
  | ProductCreateFailureAction
  | ProductCreateResetAction;
