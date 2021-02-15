import axios from "axios";
import { Dispatch } from "react";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import { CartItem } from "../types";
import { AppAction } from "../types/actions";

interface CartState {
  cart: {
    cartItems: CartItem[];
  };
}

/**
 * Add to cart action creator
 * Actions related to adding products to the cart
 */

export const addToCart = (id: string, qty: number) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => CartState
) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
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
export const removeFromCart = (cartItem: CartItem) => (
  dispatch: Dispatch<AppAction>,
  getState: () => CartState
) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: cartItem, // Changed from id to cartItem to fix remove from cart
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
