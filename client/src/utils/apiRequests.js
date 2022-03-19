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
		// const config = {
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// };
		// const res = await axios.post(signUp, data, config);
		const res = await fetch(signUp, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		return res.json();
	} catch (error) {
		console.log('Error in SignUp Request : ' + error);
		return { error };
	}
};

