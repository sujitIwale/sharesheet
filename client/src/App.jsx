import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Landing from './pages/Landing/Landing';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/'>
				<Landing />
				</Route>
				<Route exact path='/signin'>
				{/* < /> */}
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
