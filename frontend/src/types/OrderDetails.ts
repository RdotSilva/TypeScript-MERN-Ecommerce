import { Order } from "./Order";

export interface OrderDetails extends Order {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
}

export interface OrderDetailsState {
  loading: boolean;
  order?: OrderDetails;
  error?: any;
}

export enum OrderDetailsActionTypes {
  ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST",
  ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS",
  ORDER_DETAILS_FAILURE = "ORDER_DETAILS_FAILURE",
}

export interface OrderDetailsRequestAction {
  type: OrderDetailsActionTypes.ORDER_DETAILS_REQUEST;
}

export interface OrderDetailsSuccessAction {
  type: OrderDetailsActionTypes.ORDER_DETAILS_SUCCESS;
  payload: OrderDetails;
}

export interface OrderDetailsFailureAction {
  type: OrderDetailsActionTypes.ORDER_DETAILS_FAILURE;
  payload: any;
}

export type OrderDetailsAction =
  | OrderDetailsRequestAction
  | OrderDetailsSuccessAction
  | OrderDetailsFailureAction;
