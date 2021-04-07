export interface OrderDeliverState {
  loading?: boolean;
  success?: boolean;
  error?: any;
}

export enum OrderDeliverActionTypes {
  ORDER_DELIVER_REQUEST = "ORDER_DELIVER_REQUEST",
  ORDER_DELIVER_SUCCESS = "ORDER_DELIVER_SUCCESS",
  ORDER_DELIVER_FAILURE = "ORDER_DELIVER_FAILURE",
  ORDER_DELIVER_RESET = "ORDER_DELIVER_RESET",
}

export interface OrderDeliverRequestAction {
  type: OrderDeliverActionTypes.ORDER_DELIVER_REQUEST;
}

export interface OrderDeliverSuccessAction {
  type: OrderDeliverActionTypes.ORDER_DELIVER_SUCCESS;
}

export interface OrderDeliverFailureAction {
  type: OrderDeliverActionTypes.ORDER_DELIVER_FAILURE;
  payload: any;
}

export interface OrderDeliverResetAction {
  type: OrderDeliverActionTypes.ORDER_DELIVER_RESET;
}

export type OrderDeliverAction =
  | OrderDeliverRequestAction
  | OrderDeliverSuccessAction
  | OrderDeliverFailureAction
  | OrderDeliverResetAction;
