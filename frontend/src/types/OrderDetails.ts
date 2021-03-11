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
