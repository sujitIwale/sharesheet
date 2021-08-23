import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Table from './components/Table/Table';
import Upload from './components/Upload/Upload';

function App() {
	const [Data, setData] = useState([]);
	return (
		<div className='container'>
			<Header />
			<div className='base-layout'>
				<Upload setData={setData} />
				<Table Data={Data} />
			</div>
		</div>
	);
}

export default App;
