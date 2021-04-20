import {
  OrderListState,
  OrderListAction,
  OrderListActionTypes,
  OrderDeliverState,
  OrderDeliverAction,
  OrderDeliverActionTypes,
  OrderCreateAction,
  OrderCreateActionTypes,
  OrderCreateState,
  OrderDetailsAction,
  OrderDetailsActionTypes,
  OrderDetailsState,
  OrderListMyActionTypes,
  OrderListMyState,
  OrderListMyAction,
  OrderPayAction,
  OrderPayActionTypes,
  OrderPayState,
} from "../types/";

const orderCreateInitialState: OrderCreateState = {
  loading: false,
};

/**
 * Reducer used to create an order
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
 * Reducer used to get order details
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
 * Reducer used to handle order payment
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
 * Reducer used to fetch a logged in user's order list
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
 * Reducer used for an admin to fetch all orders
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

const orderDeliverInitialState: OrderDeliverState = {
  loading: false,
};

/**
 * Reducer used for order delivery
 */
export const orderDeliverReducer = (
  state: OrderDeliverState = orderDeliverInitialState,
  action: OrderDeliverAction
) => {
  switch (action.type) {
    case OrderDeliverActionTypes.ORDER_DELIVER_REQUEST:
      return {
        loading: true,
      };
    case OrderDeliverActionTypes.ORDER_DELIVER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case OrderDeliverActionTypes.ORDER_DELIVER_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case OrderDeliverActionTypes.ORDER_DELIVER_RESET:
      return {};
    default:
      return state;
  }
};
