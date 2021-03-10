import { Order } from "./Order";

export interface OrderCreate extends Order {
  _id: string;
  user: string;
}

export interface OrderCreateState {
  loading: boolean;
  order?: OrderCreate;
  success?: boolean;
  error?: any;
}
export enum OrderCreateActionTypes {
  ORDER_CREATE_REQUEST = "ORDER_CREATE_REQUEST",
  ORDER_CREATE_SUCCESS = "ORDER_CREATE_SUCCESS",
  ORDER_CREATE_FAILURE = "ORDER_CREATE_FAILURE",
}

export interface OrderCreateRequestAction {
  type: OrderCreateActionTypes.ORDER_CREATE_REQUEST;
}

export interface OrderCreateSuccessAction {
  type: OrderCreateActionTypes.ORDER_CREATE_SUCCESS;
  payload: OrderCreate;
}

export interface OrderCreateFailureAction {
  type: OrderCreateActionTypes.ORDER_CREATE_FAILURE;
  payload: any;
}

export type OrderCreateAction =
  | OrderCreateRequestAction
  | OrderCreateSuccessAction
  | OrderCreateFailureAction;
