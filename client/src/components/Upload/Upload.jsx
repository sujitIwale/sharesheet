import axios from 'axios';
import React, { useState } from 'react';
import { BASE_API_URL } from '../../utils/apiEndPoints';
import './Upload.css';

const Upload = ({ setData }) => {
	const [File, setFile] = useState(null);
	const onChange = (e) => {
		console.log(e.target.files[0]);
		setFile(e.target.files[0]);
	};
	const onClick = async () => {
		if (File === null) return;
		const data = new FormData();
		data.append('csvdata', File);
		const res = await axios.post(`${BASE_API_URL}/upload/csv`, data);
		setData(res.data);
	};
	return (
		<div className='upload-main'>
			{/* <label className='pa-10'>Upload Csv file</label>
			<input
				className='pa-10 pointer'
				type='file'
				name='file'
				onChange={onChange}
			/>
			<button className='pa-10 pointer' onClick={onClick}>
				Submit
			</button> */}

			<form id='file-upload-form' className='uploader'>
				<input
					id='file-upload'
					type='file'
					name='file'
					onChange={onChange}
				/>

				<label htmlFor='file-upload' id='file-drag'>
					<div id='start'>
						<i className='fa fa-download' aria-hidden='true'></i>
						<div>Select a file or drag here</div>
						<span id='file-upload-btn' className='btn btn-primary'>
							Select a file
						</span>
					</div>
				</label>
			</form>
			<button className='btn' onClick={onClick}>
				Upload
			</button>
		</div>
	);
};

export default Upload;
