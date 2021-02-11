import { CartItem } from "./../types";
import { CART_ADD_ITEM } from "../constants/cartConstants";

type CartActionType = {
  type: string;
  payload: CartItem;
};

export const cartReducer = (
  state = { cartItems: [] },
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
