import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import HomePage from './containers/HomePage';
import ContactPage from './containers/ContactPage';
import NotFoundPage from './containers/NotFoundPage';

export default (/* store */) => (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="contact" component={ContactPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
