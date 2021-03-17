import { PaymentResult, Order } from "./";

export interface OrderListMy extends Order {
  _id: string;
  user: string;
  isPaid: boolean;
  isDelivered: boolean;
  paidAt?: string;
  deliveredAt?: string;
  createdAt: string;
  paymentResult?: PaymentResult;
}

export interface OrderListMyState {
  orders: OrderListMy[];
  loading: boolean;
  error?: any;
}

export enum OrderListMyActionTypes {
  ORDER_LIST_MY_REQUEST = "ORDER_LIST_MY_REQUEST",
  ORDER_LIST_MY_SUCCESS = "ORDER_LIST_MY_SUCCESS",
  ORDER_LIST_MY_FAILURE = "ORDER_LIST_MY_FAILURE",
  ORDER_LIST_MY_RESET = "ORDER_LIST_MY_RESET",
}
