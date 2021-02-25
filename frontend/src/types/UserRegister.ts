import { TokenUser } from "./";

export interface UserRegisterState {
  userInfo?: TokenUser;
  loading?: boolean;
  error?: any;
}

export enum UserRegisterActionTypes {
  USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST",
  USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS",
  USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE",
}

export interface UserRegisterRequestAction {
  type: UserRegisterActionTypes.USER_REGISTER_REQUEST;
}

export interface UserRegisterSuccessAction {
  type: UserRegisterActionTypes.USER_REGISTER_SUCCESS;
  payload: TokenUser;
}

export interface UserRegisterFailureAction {
  type: UserRegisterActionTypes.USER_REGISTER_FAILURE;
  payload: any;
}

export type UserRegisterAction =
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterFailureAction;
