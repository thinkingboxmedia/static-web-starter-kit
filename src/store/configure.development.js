import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import { routerMiddleware } from 'react-router-redux';

import reducers from 'src/reducers';

export default function configure(initialState = {}, history = {}) {
  const enhancer = compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(reducers, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(reducers);
    });
  }
  
  return store;
}