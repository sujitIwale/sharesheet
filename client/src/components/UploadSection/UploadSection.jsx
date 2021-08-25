import React, { useContext } from 'react';
import Modal from '../Shared/Modal/Modal';
import Upload from '../Upload/Upload';
import TableContext from '../../context/table/TableContext';
import './UploadSection.css';

const UploadSection = () => {
	const fileUploadOption = [
		{
			title: 'Upload A CSV File',
			uploadType: 'csv',
		},
	];

	const tableContext = useContext(TableContext);
	const { modalOpen, setModalOpen } = tableContext;

	return (
		<div class='upload-section-main'>
			{modalOpen && (
				<Modal closeModal={setModalOpen}>
					<Upload closeModal={setModalOpen} />
				</Modal>
			)}
			{fileUploadOption.map((option) => (
				<div class='card1 pointer' onClick={setModalOpen}>
					<div className='title-container'>
						<div className='img-container'>
							<img src='/csvLogo.png' alt='csvLogo' />
						</div>
						<h3>{option.title}</h3>
					</div>
					<div class='go-corner'>
						<div class='go-arrow'>
							<i class='fas fa-file-csv'></i>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default UploadSection;
