import { ProductType } from "./../types";

export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL";

export interface ProductListRequestAction {
  type: typeof PRODUCT_LIST_REQUEST;
  loading?: boolean;
  payload?: ProductType[];
}

export interface ProductListSuccessAction {
  type: typeof PRODUCT_LIST_SUCCESS;
  loading?: boolean;
  payload?: ProductType[];
}

export interface ProductListFailAction {
  type: typeof PRODUCT_LIST_FAIL;
  loading?: boolean;
  payload?: Error;
}

// TODO: Add interfaces for ProductDetailsActions (x3)

/**
 * ProductList actions aggregated into one total action type
 */

export type ProductListActions =
  | ProductListRequestAction
  | ProductListSuccessAction
  | ProductListFailAction;

// TODO: Create ProductDetailsActions type and combine all 3 actions

/**
 * Aggregate of ALL actions types to use within the entire application
 * Combine all of your Redux action aggregates into this
 */

// TODO: Update AppAction with new ProductDetailsActions

export type AppAction = ProductListActions;
