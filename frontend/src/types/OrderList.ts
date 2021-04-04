import { PaymentResult } from "./";
import { Order } from "./Order";

export interface OrderList extends Order {
  _id: string;
  user: {
    _id: string;
    name: string;
  };
  isPaid: boolean;
  isDelivered: boolean;
  paidAt?: string;
  deliveredAt?: string;
  createdAt: string;
  paymentResult?: PaymentResult;
}

export interface OrderListState {
  orders: OrderList[];
  loading: boolean;
  error?: any;
}

export enum OrderListActionTypes {
  ORDER_LIST_REQUEST = "ORDER_LIST_REQUEST",
  ORDER_LIST_SUCCESS = "ORDER_LIST_SUCCESS",
  ORDER_LIST_FAILURE = "ORDER_LIST_FAILURE",
}
