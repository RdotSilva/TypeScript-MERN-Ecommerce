import { OrderActionTypes } from "../types/Order";

export const orderCreateReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_CREATE_SUCCESS:
      return {
        loading: true,
      };
    case OrderActionTypes.ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case OrderActionTypes.ORDER_CREATE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
  }
};
