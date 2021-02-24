import { AppAction } from "./../types/actions";
import axios from "axios";
import { Dispatch } from "react";
import { AppThunk } from "../store";
import {
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "./../constants/userConstants";
import { UserLoginActionTypes } from "../types/UserLogin";

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
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
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
): AppThunk => async (dispatch: Dispatch<AppAction>) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
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
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    // Log user in immediately after registration
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    // Save user info to local storage
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
