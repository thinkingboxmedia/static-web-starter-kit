import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/App';

import home from './home';
import contact from './contact';

export default (/* store */) => (
  <Route path="/" component={App}>
    <IndexRoute component={home} />
    <Route path="contact" component={contact} />
  </Route>
);
