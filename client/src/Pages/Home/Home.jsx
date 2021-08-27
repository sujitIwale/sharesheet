import React, { Fragment } from 'react';
import Table from '../../components/Table/Table';
import UploadSection from '../../components/UploadSection/UploadSection';

const Home = () => {
	return (
		<Fragment>
			<UploadSection />
			<Table />
		</Fragment>
	);
};

export default Home;
