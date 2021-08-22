import axios from 'axios';
import React, { useState } from 'react';
import { BASE_API_URL } from '../../utils/apiEndPoints';
import './Upload.css';

const Upload = () => {
	const [File, setFile] = useState(null);
	const onChange = (e) => {
		console.log(e.target.files[0]);
		setFile(e.target.files[0]);
	};
	const onClick = async (e) => {
		if (File === null) return;
		const data = new FormData();
		data.append('csvdata', File);
		const res = await axios.post(`${BASE_API_URL}/upload/csv`, data);
		console.log(res.data);
	};
	return (
		<div className='upload-main'>
			<label>Upload Csv file</label>
			<input type='file' name='file' onChange={onChange} />
			<button onClick={onClick}>Submit</button>
		</div>
	);
};

export default Upload;
