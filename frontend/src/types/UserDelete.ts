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
