import {
  UserLoginAction,
  UserLoginActionTypes,
  UserLoginState,
} from "../types/UserLogin";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from "./../constants/userConstants";

export const userLoginReducer = (
  state: UserLoginState = {},
  action: UserLoginAction
) => {
  switch (action.type) {
    case UserLoginActionTypes.USER_LOGIN_REQUEST:
      return { loading: true };
    case UserLoginActionTypes.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case UserLoginActionTypes.USER_LOGIN_FAILURE:
      return { loading: false, error: action.payload };
    case UserLoginActionTypes.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action: any) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
