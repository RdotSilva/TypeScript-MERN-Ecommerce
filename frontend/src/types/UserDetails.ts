import { User } from "./";

export interface UserDetailsState {
  user?: User;
  loading?: boolean;
  error?: any;
}

export enum UserDetailsActionTypes {
  USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST",
  USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS",
  USER_DETAILS_FAILURE = "USER_DETAILS_FAILURE",
  USER_DETAILS_RESET = "USER_DETAILS_RESET",
}

export interface UserDetailsRequestAction {
  type: UserDetailsActionTypes.USER_DETAILS_REQUEST;
}

export interface UserDetailsSuccessAction {
  type: UserDetailsActionTypes.USER_DETAILS_REQUEST;
  payload: User;
}

export interface UserDetailsFailure {
  type: UserDetailsActionTypes.USER_DETAILS_REQUEST;
  payload: any;
}

export type UserDetailsAction =
  | UserDetailsRequestAction
  | UserDetailsSuccessAction
  | UserDetailsFailure;
