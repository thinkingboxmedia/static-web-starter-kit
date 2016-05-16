import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { routerMiddleware } from 'react-router-redux';

export default function configure(initialState = {}, history) {
  const enhancer = compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(reducers, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(reducers.default);
    });
  }
  return store;
}
