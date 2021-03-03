import { TokenUser } from "./";

export interface UserUpdateProfileState {
  userInfo?: TokenUser;
  loading?: boolean;
  success?: boolean;
  error?: any;
}

export enum UserUpdateProfileActionTypes {
  USER_UPDATE_PROFILE_REQUEST = "USER_UPDATE_PROFILE_REQUEST",
  USER_UPDATE_PROFILE_SUCCESS = "USER_UPDATE_PROFILE_SUCCESS",
  USER_UPDATE_PROFILE_FAILURE = "USER_UPDATE_PROFILE_FAILURE",
  USER_UPDATE_PROFILE_RESET = "USER_UPDATE_PROFILE_RESET",
}

export interface UserUpdateProfileRequestAction {
  type: UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_REQUEST;
}

export interface UserUpdateProfileSuccessAction {
  type: UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_SUCCESS;
  payload: TokenUser;
}

export interface UserUpdateProfileFailureAction {
  type: UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_FAILURE;
  payload: any;
}

export type UserUpdateProfileAction =
  | UserUpdateProfileRequestAction
  | UserUpdateProfileSuccessAction
  | UserUpdateProfileFailureAction;
