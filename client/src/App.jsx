import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import FileState from './context/file/FileState';
import { SheetState } from './context/sheet/SheetState';
import About from './Pages/About/About';
import Edit from './Pages/Edit/Edit';
import Home from './Pages/Home/Home';
import Sheet from './Pages/Sheet/Sheet';

function App() {
	return (
		<FileState>
			<BrowserRouter>
				<div className='container'>
					<Header />
					<Switch>
						<Route exact path='/' component={Home}></Route>
						<SheetState>
							<Route exact path='/sheet/:id'>
								<Sheet />
							</Route>
							<Route exact path='/sheet/edit/:id'>
								<Edit />
							</Route>
						</SheetState>
						<Route exact path='/about'>
							{About}
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</FileState>
	);
}

export default App;
