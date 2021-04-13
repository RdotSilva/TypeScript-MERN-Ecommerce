import { Product } from "./";

export interface ProductListState {
  products: Product[];
  loading: boolean;
  error?: undefined;
}

export enum ProductListActionTypes {
  PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST",
  PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS",
  PRODUCT_LIST_FAILURE = "PRODUCT_LIST_FAILURE",
}

export interface FetchProductsRequestAction {
  type: ProductListActionTypes.PRODUCT_LIST_REQUEST;
}

export interface FetchProductsSuccessAction {
  type: ProductListActionTypes.PRODUCT_LIST_SUCCESS;
  payload: { products: Product[]; pages: number; page: number };
}

export interface FetchProductsFailureAction {
  type: ProductListActionTypes.PRODUCT_LIST_FAILURE;
  payload: any;
}

export type ProductListAction =
  | FetchProductsSuccessAction
  | FetchProductsFailureAction
  | FetchProductsRequestAction;
