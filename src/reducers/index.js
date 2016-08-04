import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import browser from './browser';
import user from './user';

export default combineReducers({
  browser,
  user,
  routing,
});
