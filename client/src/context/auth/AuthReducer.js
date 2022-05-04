import { getLocalStorage, setLocalStorage } from '../../helpers/auth';
import { GET_USER, SET_AUTH_ERROR, USER_SIGNIN, USER_SIGNOUT, USER_SIGNUP } from '../types';

const AuthReducer = (state, action) => {
	switch (action.type) {
		case USER_SIGNUP:
		case USER_SIGNIN:
			setLocalStorage('token',action.payload)
			return {
				...state,
				token:action.payload,
				isAuthenticated: true,
				loading: false,
			};
		case USER_SIGNOUT:
			return {
				...state,
				token:null,
				isAuthenticated: false,
				user:null
			};
		case GET_USER:
			return {
				...state,
				user: getLocalStorage('user'),
				isAuthenticated: true,
				loading: false,
			};
		case SET_AUTH_ERROR:
			return {
				...state,
				authError:action.payload
			};
		case USER_SIGNOUT:
			return {
				...state,
				user: null,
				isAuthenticated: false,
				loading: false,
			};
		default:
			return state;
	}
};

export default AuthReducer;
