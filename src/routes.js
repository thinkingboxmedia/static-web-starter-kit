import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './routes/App';
import HomePage from './routes/HomePage';
import ContactPage from './routes/ContactPage';
import NotFoundPage from './routes/NotFoundPage';

export default (/* store */) => (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="contact" component={ContactPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
