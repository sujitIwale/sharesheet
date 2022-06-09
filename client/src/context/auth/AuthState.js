import { createContext, useReducer } from "react";
import { unAuthenticate, verifyToken } from "../../helpers/auth";
import { postRequest } from "../../utils/apiRequests";
import { signIn_Url, signUp_Url } from "../../utils/apiEndPoints";
import {
  GET_USER,
  REMOVE_LOADING,
  SET_AUTH_ERROR,
  SET_LOADING,
  USER_SIGNIN,
  USER_SIGNOUT,
  USER_SIGNUP,
} from "../types";
import AuthReducer from "./AuthReducer";

const AuthContext = createContext();
AuthContext.displayName = "AuthContext";

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
    token: localStorage.getItem("token"),
    loading: false,
    authError: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const loadUser = async (option) => {
    
      dispatch({ type: SET_LOADING });
    const res = await verifyToken();
    if (res) {
      dispatch({ type: GET_USER });
    }
    // setTimeout(() => {
      dispatch({ type: REMOVE_LOADING });
    // }, 5000);
  };

  const setError = (error) => {
    dispatch({ type: SET_AUTH_ERROR, payload: error });
  };
  const signUp = async (data) => {
    const res = await postRequest(signUp_Url, data);
    if (res.error) {
      setError(res.error);
      return false;
    }

    dispatch({ type: USER_SIGNUP, payload: res.data.token });
    loadUser();
    return true;
  };
  const signIn = async (data) => {
    const res = await postRequest(signIn_Url, data);
    if (res.error) {
      setError(res.error);
      return false;
    }

    dispatch({ type: USER_SIGNIN, payload: res.data.token });
    loadUser();
    return true;
  };

  const signOut = () => {
    dispatch({ type: USER_SIGNOUT });
    unAuthenticate();
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        token: state.token,
        loading: state.loading,
        authError: state.authError,
        signUp,
        signIn,
        signOut,
        loadUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthState };
