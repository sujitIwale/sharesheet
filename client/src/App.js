import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Table from './components/Table/Table';

function App() {
	return (
		<div className='container'>
			<Header />
			<div className='base-layout'>
				<Table />
			</div>
		</div>
	);
}

export default App;
