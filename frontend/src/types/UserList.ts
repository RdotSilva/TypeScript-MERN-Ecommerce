import { User } from "./";

export interface UserListState {
  users: User[];
  loading: boolean;
  error?: any;
}

export enum UserListActionTypes {
  USER_LIST_REQUEST = "USER_LIST_REQUEST",
  USER_LIST_SUCCESS = "USER_LIST_SUCCESS",
  USER_LIST_FAILURE = "USER_LIST_FAILURE",
  USER_LIST_RESET = "USER_LIST_RESET",
}

export interface UserListRequestAction {
  type: UserListActionTypes.USER_LIST_REQUEST;
}

export interface UserListSuccessAction {
  type: UserListActionTypes.USER_LIST_SUCCESS;
  payload: User[];
}

export interface UserListFailureAction {
  type: UserListActionTypes.USER_LIST_FAILURE;
  payload: any;
}

export interface UserListResetAction {
  type: UserListActionTypes.USER_LIST_RESET;
}

export type UserListAction =
  | UserListRequestAction
  | UserListSuccessAction
  | UserListFailureAction
  | UserListResetAction;
