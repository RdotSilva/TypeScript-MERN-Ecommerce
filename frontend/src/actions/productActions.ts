import { ProductDetailsActionTypes } from "./../types/ProductDetails";
import axios from "axios";
import { AppThunk } from "../store";
import { ProductListActionTypes } from "../types/ProductList";
import { errorHandler } from "./errorHandler";
import { ProductCreateActionTypes, ProductDeleteActionTypes } from "../types/";

/**
 * List Products action creator
 * Actions related to listing all products
 */
export const listProducts = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: ProductListActionTypes.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");

    dispatch({
      type: ProductListActionTypes.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductListActionTypes.PRODUCT_LIST_FAILURE,
      payload: errorHandler(error),
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
      payload: errorHandler(error),
    });
  }
};

/**
 * Action used to delete a product
 */
export const deleteProduct = (id: string): AppThunk => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: ProductDeleteActionTypes.PRODUCT_DELETE_REQUEST,
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

    await axios.delete(`/api/products/${id}`, config);

    dispatch({
      type: ProductDeleteActionTypes.PRODUCT_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ProductDeleteActionTypes.PRODUCT_DELETE_FAILURE,
      payload: errorHandler(error),
    });
  }
};

/**
 * Action used to create a product
 */
export const createProduct = (): AppThunk => async (dispatch, getState) => {
  try {
    dispatch({
      type: ProductCreateActionTypes.PRODUCT_CREATE_REQUEST,
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

    const { data } = await axios.post(`/api/products`, {}, config);

    dispatch({
      type: ProductCreateActionTypes.PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductCreateActionTypes.PRODUCT_CREATE_FAILURE,
      payload: errorHandler(error),
    });
  }
};
