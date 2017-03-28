import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'src/reducers';

export default function configure(initialState = {}) {
  const middleware = applyMiddleware(thunk);
  const store = middleware(createStore)(reducers, initialState);

  return store;
}