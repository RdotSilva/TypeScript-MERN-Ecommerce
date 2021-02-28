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
