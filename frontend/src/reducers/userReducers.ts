import {
  UserLoginAction,
  UserLoginActionTypes,
  UserLoginState,
  UserRegisterActionTypes,
} from "../types/";
import { UserDeleteActionTypes } from "../types/UserDelete";
import {
  UserDetailsAction,
  UserDetailsActionTypes,
  UserDetailsState,
} from "../types/UserDetails";
import {
  UserListAction,
  UserListActionTypes,
  UserListState,
} from "../types/UserList";
import {
  UserUpdateProfileAction,
  UserUpdateProfileActionTypes,
  UserUpdateProfileState,
} from "../types/UserUpdateProfile";

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
  action: UserDetailsAction
) => {
  switch (action.type) {
    case UserDetailsActionTypes.USER_DETAILS_REQUEST:
      return { loading: true };
    case UserDetailsActionTypes.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case UserDetailsActionTypes.USER_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    case UserDetailsActionTypes.USER_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

const userUpdateProfileReducerInitialState: UserUpdateProfileState = {
  loading: false,
};

export const userUpdateProfileReducer = (
  state: UserUpdateProfileState = userUpdateProfileReducerInitialState,
  action: UserUpdateProfileAction
) => {
  switch (action.type) {
    case UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const userListReducerInitialState: UserListState = {
  loading: false,
  users: [],
};

export const userListReducer = (
  state: UserListState = userListReducerInitialState,
  action: UserListAction
) => {
  switch (action.type) {
    case UserListActionTypes.USER_LIST_REQUEST:
      return { loading: true, users: [] };
    case UserListActionTypes.USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case UserListActionTypes.USER_LIST_FAILURE:
      return { loading: false, error: action.payload, users: [] };
    case UserListActionTypes.USER_LIST_RESET:
      return { loading: false, users: [] };
    default:
      return state;
  }
};

export const userDeleteReducer = (state: any, action: any) => {
  switch (action.type) {
    case UserDeleteActionTypes.USER_DELETE_REQUEST:
      return { loading: true };
    case UserDeleteActionTypes.USER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case UserDeleteActionTypes.USER_DELETE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
