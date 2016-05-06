import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { routerMiddleware } from 'react-router-redux';

export default function configure(initialState = {}, history) {
  const middleware = applyMiddleware(thunk, routerMiddleware(history));
  const store = middleware(createStore)(reducers, initialState);

  return store;
}
