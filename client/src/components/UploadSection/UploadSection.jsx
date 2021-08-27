import React, { useContext } from 'react';
import Modal from '../Shared/Modal/Modal';
import Upload from '../Upload/Upload';
import FileContext from '../../context/file/FileContext';
import './UploadSection.css';

const UploadSection = () => {
	const fileUploadOption = [
		{
			title: 'Upload A CSV File',
			uploadType: 'csv',
			imgUrl: '/csvLogo.png',
		},
		{
			title: 'Upload A PDF File',
			uploadType: 'pdf',
			imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiOL2USQ02v7O7Yq4TPww6Nw9FkR33ZKyow&usqp=CAU',
		},
	];

	const fileContext = useContext(FileContext);
	const { modalOpen, setModalOpen } = fileContext;

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
							<img src={option.imgUrl} alt='csvLogo' />
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
