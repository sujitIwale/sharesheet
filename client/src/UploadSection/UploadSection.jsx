import React, { useContext } from 'react';
import Modal from '../components/Shared/Modal/Modal';
import Upload from '../components/Upload/Upload';
import TableContext from '../context/table/TableContext';
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
					<Upload />
				</Modal>
			)}
			{fileUploadOption.map((option) => (
				<div class='card1 pointer' onClick={setModalOpen}>
					<h3>{option.title}</h3>
					<div class='go-corner'>
						<div class='go-arrow'>→</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default UploadSection;
