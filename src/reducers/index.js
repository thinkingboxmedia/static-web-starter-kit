import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { user } from './user'

export default combineReducers({
  user,
  routing,
})
