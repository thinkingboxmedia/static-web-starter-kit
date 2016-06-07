import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, NotFound } from '../containers';

import home from './home/home';
import contact from './contact/contact';

export default (/* store */) => (
  <Route path="/" component={App}>
    <IndexRoute component={home} />
    <Route path="contact" component={contact} />
    <Route path="*" component={NotFound} />
  </Route>
);
