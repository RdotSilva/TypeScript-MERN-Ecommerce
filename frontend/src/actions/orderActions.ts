import axios from "axios";
import { AppThunk } from "../store";
import {
  OrderDetailsActionTypes,
  OrderDetails,
  OrderPayActionTypes,
} from "../types/";
import { Order } from "../types/Order";
import { OrderCreate, OrderCreateActionTypes } from "../types/OrderCreate";
import { errorHandler } from "./errorHandler";

/**
 * Action used to create an order
 */
export const createOrder = (order: Order): AppThunk => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: OrderCreateActionTypes.ORDER_CREATE_REQUEST,
    });

    // Get user info from the userLogin object (from getState)
    const {
      userLogin: { userInfo },
    } = getState();

    // Axios config
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };

    const { data } = await axios.post<OrderCreate>(
      `/api/orders`,
      order,
      config
    );

    dispatch({
      type: OrderCreateActionTypes.ORDER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OrderCreateActionTypes.ORDER_CREATE_FAILURE,
      payload: errorHandler(error),
    });
  }
};

/**
 * Action used to get order details
 */
export const getOrderDetails = (id: string): AppThunk => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: OrderDetailsActionTypes.ORDER_DETAILS_REQUEST,
    });

    // Get user info from the userLogin object (from getState)
    const {
      userLogin: { userInfo },
    } = getState();

    // Axios config
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };

    const { data } = await axios.get<OrderDetails>(`/api/orders/${id}`, config);

    dispatch({
      type: OrderDetailsActionTypes.ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OrderDetailsActionTypes.ORDER_DETAILS_FAILURE,
      payload: errorHandler(error),
    });
  }
};

/**
 * Action used to pay an order
 */
export const payOrder = (
  orderId: string,
  paymentResult: any
): AppThunk => async (dispatch, getState) => {
  try {
    dispatch({
      type: OrderPayActionTypes.ORDER_PAY_REQUEST,
    });

    // Get user info from the userLogin object (from getState)
    const {
      userLogin: { userInfo },
    } = getState();

    // Axios config
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/orders/${orderId}/pay`,
      paymentResult,
      config
    );

    dispatch({
      type: OrderPayActionTypes.ORDER_PAY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OrderPayActionTypes.ORDER_PAY_FAILURE,
      payload: errorHandler(error),
    });
  }
};
