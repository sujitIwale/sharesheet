import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Table from './components/Table/Table';
import FileState from './context/file/FileState';
import UploadSection from './components/UploadSection/UploadSection';
import About from './Pages/About/About';

function App() {
	return (
		<FileState>
			<BrowserRouter>
				<div className='container'>
					<Header />
					<div className='base-layout'>
						<Switch>
							<Route
								exact
								path='/about'
								component={About}></Route>
						</Switch>
						<UploadSection />
						<Table />
					</div>
				</div>
			</BrowserRouter>
		</FileState>
	);
}

export default App;
