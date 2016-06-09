import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Contact from './containers/Contact';
import NotFound from './containers/NotFound';

export default (/* store */) => (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="contact" component={Contact} />
    <Route path="*" component={NotFound} />
  </Route>
);
