import {
  OrderCreateAction,
  OrderCreateActionTypes,
  OrderCreateState,
} from "../types/OrderCreate";

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
    case OrderCreateActionTypes.ORDER_CREATE_SUCCESS:
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
