import React, { useContext } from 'react';
import Modal from '../Shared/Modal/Modal';
import Upload from '../Upload/Upload';
import FileContext from '../../context/file/FileContext';
import './UploadSection.css';

const UploadSection = () => {
	const fileUploadOption = [
		{
			id: 1,
			title: 'Upload A CSV File',
			uploadType: 'csv',
			imgUrl: '/csvLogo.png',
		},
		{
			id: 2,
			title: 'Upload A PDF File',
			uploadType: 'pdf',
			imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiOL2USQ02v7O7Yq4TPww6Nw9FkR33ZKyow&usqp=CAU',
		},
	];

	const fileContext = useContext(FileContext);
	const { setModalOpen } = fileContext;

	return (
		<div className='upload-section-main'>
			{fileUploadOption.map((option) => (
				<div
					key={option.id}
					className='card1 pointer'
					onClick={setModalOpen}>
					<div className='title-container'>
						<div className='img-container'>
							<img src={option.imgUrl} alt='csvLogo' />
						</div>
						<h3>{option.title}</h3>
					</div>
					<div className='go-corner'>
						<div className='go-arrow'>
							<i className='fas fa-file-csv'></i>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default UploadSection;
