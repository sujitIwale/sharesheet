import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import FileState from './context/file/FileState';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';

function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<Header />
				<FileState>
					<Switch>
						<Route exact path='/' component={Home}></Route>
						<Route exact path='/about' component={About}></Route>
					</Switch>
				</FileState>
			</div>
		</BrowserRouter>
	);
}

export default App;
