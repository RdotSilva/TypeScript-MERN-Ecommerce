export enum ProductCreateReviewActionTypes {
  PRODUCT_CREATE_REVIEW_REQUEST = "PRODUCT_CREATE_REVIEW_REQUEST",
  PRODUCT_CREATE_REVIEW_SUCCESS = "PRODUCT_CREATE_REVIEW_SUCCESS",
  PRODUCT_CREATE_REVIEW_FAILURE = "PRODUCT_CREATE_REVIEW_FAILURE",
  PRODUCT_CREATE_REVIEW_RESET = "PRODUCT_CREATE_REVIEW_RESET",
}

export interface ProductCreateReviewRequestAction {
  type: ProductCreateReviewActionTypes.PRODUCT_CREATE_REVIEW_REQUEST;
}

export interface ProductCreateReviewSuccessAction {
  type: ProductCreateReviewActionTypes.PRODUCT_CREATE_REVIEW_SUCCESS;
}

export interface ProductCreateReviewFailureAction {
  type: ProductCreateReviewActionTypes.PRODUCT_CREATE_REVIEW_FAILURE;
  payload: any;
}

export interface ProductCreateReviewResetAction {
  type: ProductCreateReviewActionTypes.PRODUCT_CREATE_REVIEW_RESET;
}

export type ProductCreateReviewAction =
  | ProductCreateReviewRequestAction
  | ProductCreateReviewSuccessAction
  | ProductCreateReviewFailureAction
  | ProductCreateReviewResetAction;
