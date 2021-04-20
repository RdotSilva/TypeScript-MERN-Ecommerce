import {
  CartState,
  OrderCreateState,
  OrderDeliverState,
  OrderDetailsState,
  OrderListState,
  OrderListMyState,
  OrderPayState,
  ProductDetailsState,
  ProductListState,
  UserDetailsState,
  UserLoginState,
  UserRegisterState,
  ProductCreateState,
  ProductCreateReviewState,
  ProductDeleteState,
  ProductTopState,
  ProductUpdateState,
  UserDeleteState,
  UserListState,
  UserUpdateState,
  UserUpdateProfileState,
} from "./";

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
  orderDeliver: OrderDeliverState;
  orderListMy: OrderListMyState;
  orderList: OrderListState;
  userList: UserListState;
  userDelete: UserDeleteState;
  userUpdate: UserUpdateState;
  productDelete: ProductDeleteState;
  productCreate: ProductCreateState;
  productUpdate: ProductUpdateState;
  productCreateReview: ProductCreateReviewState;
  productTopRated: ProductTopState;
}
