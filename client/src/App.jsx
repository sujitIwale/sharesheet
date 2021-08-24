import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Table from './components/Table/Table';
import Upload from './components/Upload/Upload';
import TableState from './context/table/TableState';

function App() {
	return (
		<TableState>
			<div className='container'>
				<Header />
				<div className='base-layout'>
					<Upload />
					<Table />
				</div>
			</div>
		</TableState>
	);
}

export default App;
