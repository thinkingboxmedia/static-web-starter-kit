import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

const PROP_TYPES = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
};

export default function Root(props) {
  return (
    <Provider store={props.store} key="provider">
      <div>
        <Router history={props.history}>
          {props.routes}
        </Router>
      </div>
    </Provider>
  );
}

Root.propTypes = PROP_TYPES;
