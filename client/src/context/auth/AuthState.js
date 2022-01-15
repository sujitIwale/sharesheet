import axios from 'axios';
import { createContext, useReducer } from 'react';
import { signUpRequest } from '../../utils/apiRequests';
import { USER_SIGNUP } from '../types';
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
	const signUp = async (data) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const res = await axios.post(
				'http://localhost:3001/auth/signup/',
				data,
				config
			);

			if (res.data.error) {
				console.log(res);
				return;
			}
			dispatch({ type: USER_SIGNUP, payload: res.data });
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
