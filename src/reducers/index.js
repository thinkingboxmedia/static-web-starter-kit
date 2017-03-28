import { combineReducers } from 'redux';
import browser from './browser';
import user from './user';

export default combineReducers({
  browser,
  user,
});
