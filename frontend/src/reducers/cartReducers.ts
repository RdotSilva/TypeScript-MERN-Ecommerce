import { CartAction, CartActionTypes, CartState } from "../types/";

const cartInitialState: CartState = {
  cartItems: [],
};

/**
 * Reducer used to add item to cart, remove item from cart, save shipping address, and save payment method
 */

export const cartReducer = (
  state: CartState = cartInitialState,
  action: CartAction
) => {
  switch (action.type) {
    case CartActionTypes.CART_ADD_ITEM:
      const item = action.payload;

      // Check if item already exists in the cart state
      const itemExists = state.cartItems.find(
        (cartItem) => cartItem.product === item.product
      )!;

      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.product === itemExists.product ? item : cartItem
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CartActionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };
    case CartActionTypes.CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CartActionTypes.CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
