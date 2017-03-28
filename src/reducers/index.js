import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import browser from './browser';
import user from './user';

export default combineReducers({
  router: routerReducer,
  browser,
  user,
});
