import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import browser from './browser';

export default combineReducers({
	router: routerReducer,
	browser,
});
