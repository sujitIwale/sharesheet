import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import { AuthState } from './context/auth/AuthState';
import FileState from './context/file/FileState';
import { SheetState } from './context/sheet/SheetState';
import About from './Pages/About/About';
import Signup from './Pages/Auth/Signup';
import Edit from './Pages/Edit/Edit';
import Home from './Pages/Home/Home';
import Sheet from './Pages/Sheet/Sheet';

function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<AuthState>
					<Header />
					<FileState>
						<Switch>
							<Route exact path='/' component={Home}></Route>
							<Route
								exact
								path='/about'
								component={About}></Route>
							<Route exact path='/signup' component={Signup} />
							<SheetState>
								<Route exact path='/sheet/:id'>
									<Sheet />
								</Route>
								<Route exact path='/sheet/edit/:id'>
									<Edit />
								</Route>
							</SheetState>
						</Switch>
					</FileState>
				</AuthState>
			</div>
		</BrowserRouter>
	);
}

export default App;
