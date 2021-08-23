import axios from 'axios';
import { BASE_API_URL } from './apiEndPoints';

export const apiRequest = async (path, data) => {
	try {
		const res = await axios.post(`${BASE_API_URL}${path}`, data);
		return res.data;
	} catch (error) {
		console.log('Error in Api Request: ' + error);
		return false;
	}
};
