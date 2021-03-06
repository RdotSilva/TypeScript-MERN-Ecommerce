export interface Cart {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}

export interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface CartState {
  cartItems: Cart[];
  shippingAddress?: ShippingAddress;
}

export enum CartActionTypes {
  CART_ADD_ITEM = "CART_ADD_ITEM",
  CART_REMOVE_ITEM = "CART_REMOVE_ITEM",
  CART_SAVE_SHIPPING_ADDRESS = "CART_SAVE_SHIPPING_ADDRESS",
  CART_SAVE_PAYMENT_METHOD = "CART_SAVE_PAYMENT_METHOD",
}

export interface CartAddItemAction {
  type: CartActionTypes.CART_ADD_ITEM;
  payload: Cart;
}

export interface CartRemoveItemAction {
  type: CartActionTypes.CART_REMOVE_ITEM;
  payload: string;
}

export interface CartSaveShippingAddressAction {
  type: CartActionTypes.CART_SAVE_SHIPPING_ADDRESS;
  payload: ShippingAddress;
}

export interface CartSavePaymentMethodAction {
  type: CartActionTypes.CART_SAVE_PAYMENT_METHOD;
  payload: string;
}

export type CartAction =
  | CartAddItemAction
  | CartRemoveItemAction
  | CartSaveShippingAddressAction
  | CartSavePaymentMethodAction;
