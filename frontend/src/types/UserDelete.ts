export interface UserDeleteState {
  success?: boolean;
  loading?: boolean;
  error?: any;
}

export enum UserDeleteActionTypes {
  USER_DELETE_REQUEST = "USER_DELETE_REQUEST",
  USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS",
  USER_DELETE_FAILURE = "USER_DELETE_FAILURE",
}

export interface UserDeleteRequestAction {
  type: UserDeleteActionTypes.USER_DELETE_REQUEST;
}

export interface UserDeleteSuccessAction {
  type: UserDeleteActionTypes.USER_DELETE_SUCCESS;
}

export interface UserDeleteFailureAction {
  type: UserDeleteActionTypes.USER_DELETE_FAILURE;
  payload: any;
}

export type UserDeleteAction =
  | UserDeleteRequestAction
  | UserDeleteSuccessAction
  | UserDeleteFailureAction;
