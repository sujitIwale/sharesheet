import React, { useContext, useState } from 'react';
import FileContext from '../../context/file/FileContext';
import Button from '../Shared/Button/Button';
import './Upload.css';

const Upload = ({ closeModal }) => {
	const [File, setFile] = useState(null);
	const [uploadStatus, setuploadStatus] = useState(false);
	const fileContext = useContext(FileContext);
	const { sendFileData, setError } = fileContext;

	const dragOver = (e) => {
		e.preventDefault();
	};

	const dragEnter = (e) => {
		e.preventDefault();
	};

	const dragLeave = (e) => {
		e.preventDefault();
	};

	const fileDrop = (e) => {
		e.preventDefault();
		const file = e.dataTransfer.files[0];
		setFile(file);
		setuploadStatus(false);
	};

	const onChange = (e) => {
		setFile(e.target.files[0]);
		setuploadStatus(false);
	};
	const onUpload = () => {
		if (File === null || uploadStatus) {
			setError({ msg: 'Please Select a file', type: 'danger' });
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
			<form
				className='upload-form'
				onDragOver={dragOver}
				onDragEnter={dragEnter}
				onDragLeave={dragLeave}
				onDrop={fileDrop}>
				<input
					id='file-upload'
					type='file'
					name='file'
					onChange={onChange}
				/>
				<label htmlFor='file-upload'>
					<div className='upload-btn-container pointer'>
						<i className='fa fa-download'></i>
						<p>{File && File.name}</p>
						<span id='file-upload-btn' className='btn-primary'>
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
