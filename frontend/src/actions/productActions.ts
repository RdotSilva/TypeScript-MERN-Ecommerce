import { ProductDetailsActionTypes } from "./../types/ProductDetails";
import axios from "axios";
import { Dispatch } from "redux";
import { AppAction } from "../types/actions";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "./../constants/productConstants";
import { AppThunk } from "../store";

/**
 * List Products action creator
 * Actions related to listing all products
 */
export const listProducts = () => async (dispatch: Dispatch<AppAction>) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/**
 * List Product Details action creator
 * Actions related to details of a specific product
 */
export const listProductDetails = (id: string): AppThunk => async (
  dispatch
) => {
  try {
    dispatch({ type: ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductDetailsActionTypes.PRODUCT_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
