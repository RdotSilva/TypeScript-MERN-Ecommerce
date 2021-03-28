import { UserRegisterState } from "./";
import { UserLoginState } from "./";
import { CartState } from "./";
import { ProductDetailsState } from "./";
import { ProductListState } from "./";
import { UserDetailsState } from "./";
import { OrderCreateState } from "./OrderCreate";
import { OrderDetailsState } from "./OrderDetails";
import { OrderListMyState } from "./OrderListMy";
import { OrderPayState } from "./OrderPay";
import { ProductDeleteState } from "./ProductDelete";
import { UserDeleteState } from "./UserDelete";
import { UserListState } from "./UserList";
import { UserUpdateState } from "./UserUpdate";
import { UserUpdateProfileState } from "./UserUpdateProfile";

export interface ReduxState {
  userLogin: UserLoginState;
  userRegister: UserRegisterState;
  productList: ProductListState;
  productDetails: ProductDetailsState;
  cart: CartState;
  userDetails: UserDetailsState;
  userUpdateProfile: UserUpdateProfileState;
  orderCreate: OrderCreateState;
  orderDetails: OrderDetailsState;
  orderPay: OrderPayState;
  orderListMy: OrderListMyState;
  userList: UserListState;
  userDelete: UserDeleteState;
  userUpdate: UserUpdateState;
  productDelete: ProductDeleteState;
}
