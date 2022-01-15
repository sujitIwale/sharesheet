import { GET_USER, USER_SIGNIN, USER_SIGNOUT, USER_SIGNUP } from '../types';

const AuthReducer = (state, action) => {
	switch (action.type) {
		case USER_SIGNUP:
		case USER_SIGNIN:
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false,
			};
		case GET_USER:
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
				loading: false,
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
