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
