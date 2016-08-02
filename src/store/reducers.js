import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from '../containers/User/userReducer';

export default combineReducers({
  user,
  routing,
});
