import { ProductDetailsActionTypes } from "./../types/ProductDetails";
import { ProductListActionTypes } from "../types/ProductList";

type ProductActionType = {
  type: string;
  payload: [];
};

type ProductDetailsActionType = {
  type: string;
  payload: { product: { reviews: [] } };
};

export const productListReducer = (
  state = { products: [] },
  action: ProductActionType
) => {
  switch (action.type) {
    case ProductListActionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case ProductListActionTypes.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case ProductListActionTypes.PRODUCT_LIST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action: ProductDetailsActionType
) => {
  switch (action.type) {
    case ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case ProductDetailsActionTypes.PRODUCT_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
