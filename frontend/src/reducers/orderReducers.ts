import {
  OrderCreateAction,
  OrderCreateActionTypes,
  OrderCreateState,
} from "../types/OrderCreate";
import {
  OrderDetailsAction,
  OrderDetailsActionTypes,
  OrderDetailsState,
} from "../types/OrderDetails";
import {
  OrderPayAction,
  OrderPayActionTypes,
  OrderPayState,
} from "../types/OrderPay";

const orderCreateInitialState: OrderCreateState = {
  loading: false,
};

/**
 * Reducer used for order creation logic
 */
export const orderCreateReducer = (
  state: OrderCreateState = orderCreateInitialState,
  action: OrderCreateAction
) => {
  switch (action.type) {
    case OrderCreateActionTypes.ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case OrderCreateActionTypes.ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case OrderCreateActionTypes.ORDER_CREATE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const orderDetailsInitialState: OrderDetailsState = {
  loading: false,
};

/**
 * Reducer used for order details logic
 */
export const orderDetailsReducer = (
  state: OrderDetailsState = orderDetailsInitialState,
  action: OrderDetailsAction
) => {
  switch (action.type) {
    case OrderDetailsActionTypes.ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case OrderDetailsActionTypes.ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case OrderDetailsActionTypes.ORDER_DETAILS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const orderPayInitialState: OrderPayState = {
  loading: false,
};

/**
 * Reducer used for order pay logic
 */
export const orderPayReducer = (
  state: OrderPayState = orderPayInitialState,
  action: OrderPayAction
) => {
  switch (action.type) {
    case OrderPayActionTypes.ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case OrderPayActionTypes.ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case OrderPayActionTypes.ORDER_PAY_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case OrderPayActionTypes.ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};
