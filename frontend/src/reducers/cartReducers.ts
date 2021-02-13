import { CartItem } from "./../types";
import { CART_ADD_ITEM } from "../constants/cartConstants";

/**
 * Type that describes the cart action used in the reducer
 */

type CartActionType = {
  type: string;
  payload: CartItem;
};

/**
 * Type that describes the cart state inside of the reducer
 */

type CartState = {
  cartItems: CartItem[];
};

export const cartReducer = (
  state: CartState = { cartItems: [] },
  action: CartActionType
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      // Check if item already exists in the cart
      const itemExists: CartItem = state.cartItems.find(
        (cartItem: CartItem) => cartItem.product === item.product
      )!;

      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem: CartItem) =>
            cartItem.product === itemExists.product ? item : cartItem
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    default:
      return state;
  }
};
