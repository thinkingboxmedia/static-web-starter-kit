import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import createStore from './store/configure';

import domready from 'domready';

let root;

domready(() => {

	require('./utils/device').detect(); // mobile / tablet / desktop?

  let App = require('./sections/App').default;
	root = render(<Provider store={createStore()}><App/></Provider>, document.getElementById('root'), root);
});


if (module.hot) {
  module.hot.accept('./sections/App', () => requestAnimationFrame(init))
}
