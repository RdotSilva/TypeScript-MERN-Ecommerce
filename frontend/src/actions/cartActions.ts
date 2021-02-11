import axios from "axios";
import { Dispatch } from "react";
import { CART_ADD_ITEM } from "../constants/cartConstants";
import { AppAction } from "../types/actions";

/**
 * Add to cart action creator
 * Actions related to adding products to the cart
 */

export const addToCart = (id: string, qty: number) => async (
  dispatch: Dispatch<AppAction>,
  getState: any // TODO change type
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
