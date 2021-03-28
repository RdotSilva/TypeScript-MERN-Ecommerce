export interface ProductDeleteState {
  success?: boolean;
  loading?: boolean;
  error?: any;
}

export enum ProductDeleteActionTypes {
  PRODUCT_DELETE_REQUEST = "PRODUCT_DELETE_REQUEST",
  PRODUCT_DELETE_SUCCESS = "PRODUCT_DELETE_SUCCESS",
  PRODUCT_DELETE_FAILURE = "PRODUCT_DELETE_FAILURE",
}

export interface ProductDeleteRequestAction {
  type: ProductDeleteActionTypes.PRODUCT_DELETE_REQUEST;
}

export interface ProductDeleteSuccessAction {
  type: ProductDeleteActionTypes.PRODUCT_DELETE_SUCCESS;
}

export interface ProductDeleteFailureAction {
  type: ProductDeleteActionTypes.PRODUCT_DELETE_FAILURE;
  payload: any;
}

export type ProductDeleteAction =
  | ProductDeleteRequestAction
  | ProductDeleteSuccessAction
  | ProductDeleteFailureAction;
