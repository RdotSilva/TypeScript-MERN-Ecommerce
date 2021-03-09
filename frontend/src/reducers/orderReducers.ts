import { OrderCreateActionTypes } from "../types/OrderCreate";

export const orderCreateReducer = (state: any = {}, action: any) => {
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
  }
};
