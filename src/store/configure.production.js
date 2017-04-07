import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { routerMiddleware } from 'react-router-redux';

import reducers from 'src/reducers';

export default function configure(initialState = {}, history = {}) {
  const middleware = applyMiddleware(thunk, routerMiddleware(history));
  const store = middleware(createStore)(reducers, initialState);

  return store;
}