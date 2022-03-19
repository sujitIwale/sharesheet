import React, { Fragment, lazy, Suspense, useContext } from 'react';
import Popup from '../../components/Shared/Popup/Popup';
import Modal from '../../components/Shared/Modal/Modal';
import Table from '../../components/Table/Table';
import Upload from '../../components/Upload/Upload';
import FileContext from '../../context/file/FileContext';
import Skeleton from '../../components/Skeleton/Skeleton';

const UploadSection = lazy(() =>
	import('../../components/UploadSection/UploadSection')
);

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
			<Suspense fallback={<Skeleton type='selection' />}>
				<UploadSection />
			</Suspense>
			<Table />
		</Fragment>
	);
};

export default Home;
