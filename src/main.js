import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

import createStore from './store/configure';

import domready from 'domready';

let root;

domready(() => {

  const history = createHistory();

	require('./utils/device').detect(); // mobile / tablet / desktop?

  let App = require('./sections/App').default;
	root = render(
    <Provider store={createStore()}>
      <ConnectedRouter history={ history }>
        <App/>
      </ConnectedRouter>
    </Provider>, 
    document.getElementById('root'), root
  );
});


if (module.hot) {
  module.hot.accept('./sections/App', () => requestAnimationFrame(init))
}
