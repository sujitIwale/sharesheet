import React, { useContext, useState } from 'react';
import FileContext from '../../context/file/FileContext';
import Button from '../Shared/Button/Button';
import './Upload.css';

const Upload = ({ closeModal }) => {
	const [File, setFile] = useState(null);
	const [uploadStatus, setuploadStatus] = useState(false);
	const fileContext = useContext(FileContext);
	const { sendFileData } = fileContext;
	const onChange = (e) => {
		setFile(e.target.files[0]);
		setuploadStatus(false);
	};
	const onUpload = () => {
		if (File === null || uploadStatus) {
			alert('Please Select a file');
			return;
		}
		setuploadStatus(true);
		closeModal();
		const data = new FormData();
		data.append('csvdata', File);
		sendFileData(data);
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
						<div>Select a file</div>
						<span id='file-upload-btn' className='btn btn-primary'>
							Select a file
						</span>
					</div>
				</label>
			</form>
			<Button textValue='Upload' onClick={onUpload} bgColor='#454cad' />
		</div>
	);
};

export default Upload;
