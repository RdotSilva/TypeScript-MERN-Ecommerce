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
