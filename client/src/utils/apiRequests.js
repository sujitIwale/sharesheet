import axios from 'axios';
import { BASE_API_URL, signUp } from './apiEndPoints';

export const apiRequest = async (path, data) => {
	try {
		const res = await axios.post(`${BASE_API_URL}${path}`, data);
		return res.data;
	} catch (error) {
		console.log('Error in Api Request: ' + error);
		return false;
	}
};

export const signUpRequest = async (data) => {
	try {
		const res = await axios.post(signUp, data);
		return res;
	} catch (error) {
		console.log('Error in Api Request: ' + error);
		return { error };
	}
};

