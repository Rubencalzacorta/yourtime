import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Results from "./pages/Results/index"

import Home from './pages/Home';
import MovieDetails from "./pages/MovieDetail"
import Todos from "./pages/Todo/Todo"

import "./App.css"


const App = ({ store }) => (
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/results" component={Results} />
				<Route path="/movie/:id" component={MovieDetails} />
				<Route path="/todos" component={Todos} />
			</div>
		</Router>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
