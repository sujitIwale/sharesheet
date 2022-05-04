import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import PrivateRoute from './components/routes/PrivateRoute';
import { AuthState } from './context/auth/AuthState';
import { FileState } from './context/file/FileState';
import { SheetState } from './context/sheet/SheetState';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Landing from './pages/Landing/Landing';
import Project from './pages/project/Project';
import Sheet from './pages/sheet/Sheet';

function App() {
	return (
		<Router>
			<div className="app">
				<AuthState>
				<Header />
				<Switch>
					<Route exact path='/signin'>
						<SignIn />
					</Route>
					<Route exact path='/signup'>
						<SignUp />
					</Route>
					<FileState>
					<SheetState>
						<PrivateRoute exact path='/' component={Project}/>
						<PrivateRoute exact path='/sheet/:sheetId' component={Sheet} />
					</SheetState>
					</FileState>
					<Route exact path='/about'>
						<Landing />
					</Route>
					<Route path="*" element={<p>There's nothing here: 404!</p>} />
				</Switch>
				</AuthState>
			</div>
		</Router>
	);
}

export default App;
