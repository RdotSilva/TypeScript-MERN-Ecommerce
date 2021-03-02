import { PasswordUser } from "./../types/";
import { AppAction } from "./../types/actions";
import axios from "axios";
import { Dispatch } from "react";
import { AppThunk } from "../store";
import { UserLoginActionTypes } from "../types/";
import { UserRegisterActionTypes } from "../types/";
import { errorHandler } from "./errorHandler";
import { UserDetailsActionTypes } from "../types/UserDetails";
import { UserUpdateProfileActionTypes } from "../types/UserUpdateProfile";

/**
 * Action used to log in a user
 */
export const login = (email: string, password: string): AppThunk => async (
  dispatch
) => {
  try {
    dispatch({
      type: UserLoginActionTypes.USER_LOGIN_REQUEST,
    });

    // Axios config
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: UserLoginActionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });

    // Save user info to local storage
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UserLoginActionTypes.USER_LOGIN_FAILURE,
      payload: errorHandler(error),
    });
  }
};

/**
 * Action used to log out a user
 */
export const logout = () => (dispatch: Dispatch<AppAction>) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: UserLoginActionTypes.USER_LOGOUT });
};

/**
 * Action used to register a user and immediately log in
 * the user after registration
 */
export const register = (
  name: string,
  email: string,
  password: string
): AppThunk => async (dispatch) => {
  try {
    dispatch({
      type: UserRegisterActionTypes.USER_REGISTER_REQUEST,
    });

    // Axios config
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch({
      type: UserRegisterActionTypes.USER_REGISTER_SUCCESS,
      payload: data,
    });

    // Log user in immediately after registration
    dispatch({
      type: UserLoginActionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });

    // Save user info to local storage
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UserRegisterActionTypes.USER_REGISTER_FAILURE,
      payload: errorHandler(error),
    });
  }
};

/**
 * Action used to get fetch a users details
 */
export const getUserDetails = (id: string): AppThunk => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: UserDetailsActionTypes.USER_DETAILS_REQUEST,
    });

    // Get user info from the userLogin object (from getState)
    const {
      userLogin: { userInfo },
    } = getState();

    // Axios config
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({
      type: UserDetailsActionTypes.USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserDetailsActionTypes.USER_DETAILS_FAILURE,
      payload: errorHandler(error),
    });
  }
};

/**
 * Action used to get update user profile
 */
export const updateUserProfile = (user: PasswordUser): AppThunk => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_REQUEST,
    });

    // Get user info from the userLogin object (from getState)
    const {
      userLogin: { userInfo },
    } = getState();

    // Axios config
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config);

    dispatch({
      type: UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_FAILURE,
      payload: errorHandler(error),
    });
  }
};
