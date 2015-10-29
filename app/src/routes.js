'use strict';

import React from 'react';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, IndexRoute } from 'react-router';

import App from './display/App';
import SectionHome from './display/sections/home/Home';
import SectionContact from './display/sections/contact/Contact';

import RouterActions from './store/RouterActions';

exports.routes = (
  <Router history={createBrowserHistory()}
          onUpdate={function() {
            RouterActions.update.dispatch(this.state)
          }}
    >
    <Route path="/" component={App}>
      <IndexRoute component={SectionHome} />
      <Route path="contact" component={SectionContact} />
    </Route>
  </Router>
);
