import axios from 'axios';
import cookie from 'js-cookie';
import setAuthToken from '../utils/setAuthToken';


export const setCookie = (key, value) => {
	if (window !== 'undefined') {
		cookie.set(key, value, {
			expires: 1,
		});
	}
};

export const removeCookie = (key) => {
	if (window !== 'undefined') {
		cookie.remove(key);
	}
};

export const getCookie = (key) => {
	if (window !== 'undefined') {
		return cookie.get(key);
	}
};

export const setLocalStorage = (key, value) => {
	if (window !== 'undefined') {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const removeLocalStorage = (key) => {
	if (window !== 'undefined') {
		localStorage.removeItem(key);
	}
};

export const authenticate = (response) => {
	setLocalStorage('user', response.data);
};

export const unAuthenticate = () => {
	removeCookie('token');
	removeLocalStorage('user');
};

export const verifyToken = async () => {
	const token = getCookie('token');
	if (token) {
		setAuthToken(token);
		try {
			const res = await axios.get('http://localhost:3001/auth/');
			authenticate(res);
		} catch (error) {
			console.log(error);
			unAuthenticate();
		}
	} else {
		unAuthenticate();
	}
};

export const isAuth = () => {
	if (window !== 'undefined') {
		const cookieChecked = getCookie('token');
		if (cookieChecked) {
			if (localStorage.getItem('user')) {
				return JSON.parse(localStorage.getItem('user'));
			} else {
				return false;
			}
		}
	}
};

export const signout = (next) => {
	removeCookie('token');
	removeLocalStorage('user');
	next();
};

export const updateUser = (response, next) => {
	if (typeof window !== 'undefined') {
		let auth = JSON.parse(localStorage.getItem('user'));
		auth = response.data;
		localStorage.setItem('user', JSON.stringify(auth));
	}
	next();
};
