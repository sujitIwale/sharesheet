import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Table from './components/Table/Table';
import TableState from './context/table/TableState';
import UploadSection from './components/UploadSection/UploadSection';

function App() {
	return (
		<TableState>
			<div className='container'>
				<Header />
				<div className='base-layout'>
					<UploadSection />
					<Table />
				</div>
			</div>
		</TableState>
	);
}

export default App;
