import { UserRegisterState } from "./";
import { UserLoginState } from "./";
import { CartState } from "./";
import { ProductDetailsState } from "./";
import { ProductListState } from "./";

export interface ReduxState {
  userLogin: UserLoginState;
  userRegister: UserRegisterState;
  productList: ProductListState;
  productDetails: ProductDetailsState;
  cart: CartState;
}
