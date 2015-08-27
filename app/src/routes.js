'use strict';

import React from 'react';

import { Router, Route } from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';

import App from './display/App';
import Home from './display/sections/home/Home';
import Contact from './display/sections/contact/Contact';

var routes = (
  <Router history={new HashHistory}>
    <Route  component={App}>
      <Route path="/" component={Home} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
);

module.exports = routes;
