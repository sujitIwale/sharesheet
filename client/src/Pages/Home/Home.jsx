import React, { Fragment, useContext } from 'react';
import Popup from '../../components/Shared/Popup/Popup';
import Modal from '../../components/Shared/Modal/Modal';
import Table from '../../components/Table/Table';
import Upload from '../../components/Upload/Upload';
import UploadSection from '../../components/UploadSection/UploadSection';
import FileContext from '../../context/file/FileContext';

const Home = () => {
	const fileContext = useContext(FileContext);
	const { setModalOpen, modalOpen, error } = fileContext;
	return (
		<Fragment>
			{modalOpen && (
				<Modal closeModal={setModalOpen}>
					<Upload closeModal={setModalOpen} />
				</Modal>
			)}
			{error && <Popup error={error}></Popup>}
			<UploadSection />
			{/* <Table /> */}
		</Fragment>
	);
};

export default Home;
