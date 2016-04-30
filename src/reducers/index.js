import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { user } from './user'

export default combineReducers({
  router,
  user,
})
