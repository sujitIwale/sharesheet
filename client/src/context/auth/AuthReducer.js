import { getLocalStorage, setLocalStorage } from "../../helpers/auth";
import {
  GET_USER,
  REMOVE_LOADING,
  SET_AUTH_ERROR,
  SET_LOADING,
  USER_SIGNIN,
  USER_SIGNOUT,
  USER_SIGNUP,
} from "../types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case USER_SIGNUP:
    case USER_SIGNIN:
      setLocalStorage("token", action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    case GET_USER:
      return {
        ...state,
        user: getLocalStorage("user"),
        isAuthenticated: true,
      };
    case SET_AUTH_ERROR:
      return {
        ...state,
        authError: action.payload,
      };
    case USER_SIGNOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        token: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
