export interface OrderPayState {
  loading?: boolean;
  success?: boolean;
  error?: any;
}

export enum OrderPayActionTypes {
  ORDER_PAY_REQUEST = "ORDER_PAY_REQUEST",
  ORDER_PAY_SUCCESS = "ORDER_PAY_SUCCESS",
  ORDER_PAY_FAILURE = "ORDER_PAY_FAILURE",
  ORDER_PAY_RESET = "ORDER_PAY_RESET",
}

export interface OrderPayRequestAction {
  type: OrderPayActionTypes.ORDER_PAY_REQUEST;
}

export interface OrderPaySuccessAction {
  type: OrderPayActionTypes.ORDER_PAY_SUCCESS;
}

export interface OrderPayFailureAction {
  type: OrderPayActionTypes.ORDER_PAY_FAILURE;
  payload: any;
}

export interface OrderPayResetAction {
  type: OrderPayActionTypes.ORDER_PAY_RESET;
}

export type OrderPayAction =
  | OrderPayRequestAction
  | OrderPaySuccessAction
  | OrderPayFailureAction
  | OrderPayResetAction;
