import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Landing from './pages/Landing/Landing';

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<Switch>
					<Route exact path='/'>
						<Landing />
					</Route>
					<Route exact path='/signin'>
						<SignIn />
					</Route>
					<Route exact path='/signup'>
						<SignUp />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
