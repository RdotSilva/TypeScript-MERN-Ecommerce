import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAILURE,
} from "./../constants/userConstants";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";
import { CartItem, ProductType } from "./../types";
import { TokenUser } from "./User";

/**
 * Add an interface for each action type
 * These will be aggregated and used in the AppAction type
 */

/**
 * ProductList interfaces
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

/**
 * Product Details interfaces
 */

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
 * Cart interfaces
 */

export interface AddToCartAction {
  type: typeof CART_ADD_ITEM;
  payload: CartItem;
}

export interface RemoveFromCartAction {
  type: typeof CART_REMOVE_ITEM;
  payload: CartItem; // Changed from string to CartItem to fix remove from cart
}

/**
 * User Login/Logout interfaces
 */

export interface UserLoginRequestAction {
  type: typeof USER_LOGIN_REQUEST;
}

export interface UserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS;
  payload: TokenUser;
}

export interface UserLoginFailureAction {
  type: typeof USER_LOGIN_FAIL;
  payload: any;
}

export interface UserLogoutAction {
  type: typeof USER_LOGOUT;
}

/**
 * User registration actions
 */

export interface UserRegisterRequestAction {
  type: typeof USER_REGISTER_REQUEST;
}
export interface UserRegisterSuccessAction {
  type: typeof USER_REGISTER_SUCCESS;
  payload: TokenUser;
}

export interface UserRegisterFailureAction {
  type: typeof USER_REGISTER_FAILURE;
  payload: any;
}

/**
 * Above actions aggregated into one total action type
 */

export type ProductListActions =
  | ProductListRequestAction
  | ProductListSuccessAction
  | ProductListFailAction;

export type ProductDetailsActions =
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction
  | ProductDetailsFailAction;

export type CartActions = AddToCartAction | RemoveFromCartAction;

export type UserLoginActions =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginFailureAction
  | UserLogoutAction;

export type UserRegistrationActions =
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterFailureAction;
/**
 * Aggregate of ALL actions types to use within the entire application
 * Combine all of your Redux action aggregates into this
 */

export type AppAction =
  | ProductListActions
  | ProductDetailsActions
  | CartActions
  | UserLoginActions
  | UserRegistrationActions;
