import axios from "axios";
import { AppThunk } from "../store";
import { Order } from "../types/Order";
import { OrderCreateActionTypes } from "../types/OrderCreate";
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

    const { data } = await axios.post(`/api/orders`, order, config);

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
