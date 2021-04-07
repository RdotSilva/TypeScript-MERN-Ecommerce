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
