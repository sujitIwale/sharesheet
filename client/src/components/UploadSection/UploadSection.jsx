import React, { useContext } from 'react';
import FileContext from '../../context/file/FileContext';
// import Skeleton from '../Skeleton/Skeleton';
import './UploadSection.css';

const UploadSection = () => {
	const fileUploadOption = [
		{
			id: 1,
			title: 'Create A New Sheet',
			fileType: 'csvw/oheaders',
			imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiOL2USQ02v7O7Yq4TPww6Nw9FkR33ZKyow&usqp=CAU',
		},
		{
			id: 2,
			title: 'Upload A CSV File',
			fileType: 'csv',
			imgUrl: '/csvLogo.png',
		},
	];

	const fileContext = useContext(FileContext);
	const { setModalOpen } = fileContext;

	return (
		<div className='upload-section-main'>
			{fileUploadOption.map((option) => (
				<div
					key={option.id}
					className='upload-card pointer'
					onClick={setModalOpen}>
					<div className='title-container'>
						<div className='img-container'>
							{option.id === 1 ? (
								<i class='fas fa-plus'></i>
							) : (
								<img src={option.imgUrl} alt='csvLogo' />
							)}
						</div>
						<h3>{option.title}</h3>
					</div>
				</div>
			))}
		</div>
	);
};

export default UploadSection;
