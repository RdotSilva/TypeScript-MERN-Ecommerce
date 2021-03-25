export interface UserUpdateState {
  loading?: boolean;
  success?: boolean;
  error?: any;
}

export enum UserUpdateActionTypes {
  USER_UPDATE_REQUEST = "USER_UPDATE_REQUEST",
  USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS",
  USER_UPDATE_FAILURE = "USER_UPDATE_FAILURE",
  USER_UPDATE_RESET = "USER_UPDATE_RESET",
}

export interface UserUpdateRequestAction {
  type: UserUpdateActionTypes.USER_UPDATE_REQUEST;
}

export interface UserUpdateSuccessAction {
  type: UserUpdateActionTypes.USER_UPDATE_SUCCESS;
}

export interface UserUpdateFailureAction {
  type: UserUpdateActionTypes.USER_UPDATE_FAILURE;
  payload: any;
}

export interface UserUpdateResetAction {
  type: UserUpdateActionTypes.USER_UPDATE_RESET;
}

export type UserUpdateAction =
  | UserUpdateRequestAction
  | UserUpdateSuccessAction
  | UserUpdateFailureAction
  | UserUpdateResetAction;
