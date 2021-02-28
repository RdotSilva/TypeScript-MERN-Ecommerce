import {
  UserLoginAction,
  UserLoginActionTypes,
  UserLoginState,
  UserRegisterActionTypes,
} from "../types/";
import { UserDetailsActionTypes, UserDetailsState } from "../types/UserDetails";

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
    case UserRegisterActionTypes.USER_REGISTER_REQUEST:
      return { loading: true };
    case UserRegisterActionTypes.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case UserRegisterActionTypes.USER_REGISTER_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const initialUserDetailsState: UserDetailsState = { loading: false };

export const userDetailsReducer = (
  state: UserDetailsState = initialUserDetailsState,
  action: any // TODO: UserDetailsAction
) => {
  switch (action.type) {
    case UserDetailsActionTypes.USER_DETAILS_REQUEST:
      return { loading: true };
    case UserDetailsActionTypes.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case UserDetailsActionTypes.USER_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
