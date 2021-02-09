import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";
import { ProductType } from "./../types";

/**
 * Add an interface for each action type
 * These will be aggregated and used in the AppAction type
 */
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

export interface ProductDetailsRequestAction {
  type: typeof PRODUCT_DETAILS_REQUEST;
  loading?: boolean;
  payload?: ProductType;
}

export interface ProductDetailsSuccessAction {
  type: typeof PRODUCT_DETAILS_SUCCESS;
  loading?: boolean;
  payload: ProductType;
}

export interface ProductDetailsFailAction {
  type: typeof PRODUCT_DETAILS_FAIL;
  loading?: boolean;
  payload?: Error;
}

/**
 * ProductList actions aggregated into one total action type
 */

export type ProductListActions =
  | ProductListRequestAction
  | ProductListSuccessAction
  | ProductListFailAction;

export type ProductDetailsActions =
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction
  | ProductDetailsFailAction;

/**
 * Aggregate of ALL actions types to use within the entire application
 * Combine all of your Redux action aggregates into this
 */

export type AppAction = ProductListActions | ProductDetailsActions;
