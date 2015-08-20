'use strict';

import React from 'react';

import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './display/App';
import Home from './display/sections/home/Home';
import Contact from './display/sections/contact/Contact';

var routes = (
  <Route handler={App} path='/'>
    <DefaultRoute handler={Home} />
    <Route name='contact' path='contact' handler={Contact} />
    <NotFoundRoute handler={Home}/>
  </Route>
);

module.exports = routes;
