import { ProductType } from "./../types";
import { CART_ADD_ITEM } from "../constants/cartConstants";

type CartActionType = {
  type: string;
  payload: ProductType[];
};

export const cartReducer = (
  state = { cartItems: [] },
  action: CartActionType
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const itemExists = state.cartItems.find(
        (cartItem) => cartItem.product === item.product
      );

      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.product === itemExists.product ? item : carItem
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    default:
      return state;
  }
};
