import React, { useState } from 'react';
import { apiRequest } from '../../utils/apiRequests';
import './Upload.css';

const Upload = ({ setData }) => {
	const [File, setFile] = useState(null);
	const [uploadStatus, setuploadStatus] = useState(false);
	const onChange = (e) => {
		setFile(e.target.files[0]);
		setuploadStatus(false);
	};
	const onClick = async () => {
		if (File === null || uploadStatus) {
			alert('Please Select a file');
			return;
		}
		const data = new FormData();
		data.append('csvdata', File);
		console.log('Uploading');
		const res = await apiRequest('/upload/csv', data);
		if (res) {
			setData(res);
			setuploadStatus(true);
		}
	};
	return (
		<div className='upload-main'>
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
