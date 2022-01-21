import axios from 'axios';
import { createContext, useReducer } from 'react';
import {
	authenticate,
	getCookie,
	setCookie,
	unAuthenticate,
} from '../../helpers/auth';
import { signUpRequest } from '../../utils/apiRequests';
import setAuthToken from '../../utils/setAuthToken';
import { GET_USER, USER_SIGNUP } from '../types';
import AuthReducer from './AuthReducer';

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

const AuthState = (props) => {
	const initialState = {
		isAuthenticated: false,
		user: null,
		token: localStorage.getItem('token'),
		loading: false,
	};
	const [state, dispatch] = useReducer(AuthReducer, initialState);
	const loadUser = async () => {
		const token = getCookie('token');
		if (token) {
			setAuthToken(token);
			try {
				const res = await axios.get('http://localhost:3001/auth/');
				authenticate(res);
				if (res.data) {
					dispatch({ type: GET_USER, payload: res.data });
				}
			} catch (error) {
				console.log(error);
				unAuthenticate();
				document.location.assign('/signin');
			}
		}
	};
	const signUp = async (data) => {
		try {
			const res = await signUpRequest(data);

			if (res.error) {
				console.log(res);
				return;
			}
			dispatch({ type: USER_SIGNUP, payload: res });
			setCookie('token', res.token);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				user: state.user,
				token: state.token,
				loading: state.loading,
				signUp,
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthState };
