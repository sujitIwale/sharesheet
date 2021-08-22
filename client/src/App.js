import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Table from './components/Table/Table';
import Upload from './components/Upload/Upload';

function App() {
	return (
		<div className='container'>
			<Header />
			<div className='base-layout'>
				<Upload />
				<Table />
			</div>
		</div>
	);
}

export default App;
