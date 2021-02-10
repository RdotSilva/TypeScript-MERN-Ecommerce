import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
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
