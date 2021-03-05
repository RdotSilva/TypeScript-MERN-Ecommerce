import axios from "axios";
import { CartActionTypes, ShippingAddress } from "../types/";
import { AppThunk } from "../store";

/**
 * Add to cart action creator
 * Actions related to adding products to the cart
 */

export const addToCart = (id: string, qty: number): AppThunk => async (
  dispatch,
  getState
) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CartActionTypes.CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

/**
 * Remove item from cart action creator
 * Actions related to removing an item from cart
 */
export const removeFromCart = (id: string): AppThunk => async (
  dispatch,
  getState
) => {
  dispatch({
    type: CartActionTypes.CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

/**
 * Save shipping address action creator
 * Actions related to saving a shipping address
 */
export const saveShippingAddress = (data: ShippingAddress): AppThunk => async (
  dispatch
) => {
  dispatch({
    type: CartActionTypes.CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
