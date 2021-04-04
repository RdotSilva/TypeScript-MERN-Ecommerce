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

export interface OrderListRequestAction {
  type: OrderListActionTypes.ORDER_LIST_REQUEST;
}

export interface OrderListSuccessAction {
  type: OrderListActionTypes.ORDER_LIST_SUCCESS;
  payload: OrderList[];
}

export interface OrderListFailureAction {
  type: OrderListActionTypes.ORDER_LIST_FAILURE;
  payload: any;
}

export type OrderListAction =
  | OrderListRequestAction
  | OrderListSuccessAction
  | OrderListFailureAction;
