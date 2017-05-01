import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

import createStore from './store/configure';

import App from './sections/App';

import domready from 'domready';

domready(() => {

  const history = createHistory();
  const store = createStore();

	require('./utils/device').detect(); // mobile / tablet / desktop?

  const render = (Component, reduxStore) => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={ reduxStore }>
          <ConnectedRouter history={ history }>
            <Component/>
          </ConnectedRouter>
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  };

  render(App, store);

  if(module.hot) {
    module.hot.accept('./sections/App', () => {
      const hotApp = require('./sections/App').default
      render(hotApp, store)
    });
  }
  
});