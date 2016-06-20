import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

const PROP_TYPES = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
};

const Root = ({ store, history, routes }) => (
  <Provider store={store} key="provider">
    <div>
      <Router history={history}>
        {routes}
      </Router>
    </div>
  </Provider>
);

Root.propTypes = PROP_TYPES;

export default Root;
