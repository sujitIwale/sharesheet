import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Table from './components/Table/Table';
import FileState from './context/file/FileState';
import UploadSection from './components/UploadSection/UploadSection';

function App() {
	return (
		<FileState>
			<div className='container'>
				<Header />
				<div className='base-layout'>
					<UploadSection />
					<Table />
				</div>
			</div>
		</FileState>
	);
}

export default App;
