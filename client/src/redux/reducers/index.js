import { combineReducers } from 'redux';
import authReducers from './auth.reducer';
import todoReducers from './todo.reducer';


const rootReducer = combineReducers({
	authReducers,
	todoReducers
});

export default rootReducer;
