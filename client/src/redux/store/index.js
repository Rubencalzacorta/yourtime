import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from '../reducers';

const configureStore = () => {
	return {
		...createStore(rootReducer, composeWithDevTools(applyMiddleware())),
	};
};

export default configureStore;
