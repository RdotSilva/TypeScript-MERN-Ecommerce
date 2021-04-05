import {
  OrderListState,
  OrderListAction,
  OrderListActionTypes,
} from "../types/";
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
  OrderListMyActionTypes,
  OrderListMyState,
  OrderListMyAction,
} from "../types/OrderListMy";
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

const orderListMyInitialState: OrderListMyState = {
  loading: false,
  orders: [],
};

/**
 * Reducer used for logged in user order list
 */
export const orderListMyReducer = (
  state: OrderListMyState = orderListMyInitialState,
  action: OrderListMyAction
) => {
  switch (action.type) {
    case OrderListMyActionTypes.ORDER_LIST_MY_REQUEST:
      return {
        loading: true,
      };
    case OrderListMyActionTypes.ORDER_LIST_MY_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case OrderListMyActionTypes.ORDER_LIST_MY_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case OrderListMyActionTypes.ORDER_LIST_MY_RESET:
      return {
        orders: [],
        loading: false,
      };
    default:
      return state;
  }
};

const orderListInitialState: OrderListState = {
  loading: false,
  orders: [],
};

/**
 * Reducer used for admin only order list
 */
export const orderListReducer = (
  state: OrderListState = orderListInitialState,
  action: OrderListAction
) => {
  switch (action.type) {
    case OrderListActionTypes.ORDER_LIST_REQUEST:
      return {
        loading: true,
        orders: state.orders,
      };
    case OrderListActionTypes.ORDER_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case OrderListActionTypes.ORDER_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
        orders: state.orders,
      };
    default:
      return state;
  }
};
