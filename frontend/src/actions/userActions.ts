import { AppAction } from "./../types/actions";
import axios from "axios";
import { Dispatch } from "react";
import { AppThunk } from "../store";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./../constants/userConstants";

/**
 * Action used to log in a user
 */
export const login = (email: string, password: string): AppThunk => async (
  dispatch: Dispatch<AppAction>
) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
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
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    // Save user info to local storage
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
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
  dispatch({ type: USER_LOGOUT });
};
