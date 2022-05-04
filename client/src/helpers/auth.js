import axios from 'axios';
import { getUser_Url } from '../utils/apiEndPoints';
import setAuthToken from '../utils/setAuthToken';


export const setLocalStorage = (key, value) => {
	if (window !== undefined) {
		// console.log(value)
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const getLocalStorage = (key) => {
	if(window !== undefined) {
		return JSON.parse(localStorage.getItem(key))
	}
}

export const removeLocalStorage = (key) => {
	if (window !== undefined) {
		localStorage.removeItem(key);
	}
};

export const authenticate = (data) => {
	setLocalStorage('user', data);
};

export const unAuthenticate = () => {
	removeLocalStorage('user');
	removeLocalStorage('token');
};

export const verifyToken = async () => {
	const token = getLocalStorage('token');
	// console.log('verifytoken' , token)
	if (token) {
		setAuthToken(token);
		try {
			const res = await axios.get(getUser_Url);
			// console.log(res)
			authenticate(res.data);
			return true;
		} catch (error) {
			console.log(error);
			unAuthenticate();
			return false
		}
	} else {
		unAuthenticate();
		return false
	}
};

export const isAuth = () => {
	if (window !== undefined) {
		const token = getLocalStorage('token');
		const user = getLocalStorage('user');
		if (token) {
			if (user) {
				return user;
			} else {
				return false;
			}
		}
		return false
	}
	return false
};

export const signout = (next) => {
	removeLocalStorage('user');
	next();
};

export const updateUser = (response, next) => {
	if (typeof window !== undefined) {
		let auth = JSON.parse(localStorage.getItem('user'));
		auth = response.data;
		localStorage.setItem('user', JSON.stringify(auth));
	}
	next();
};
