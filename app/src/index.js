'use strict';

import domready from 'domready';
import React from 'react';
import Router from 'react-router';

import routes from './routes';

/**
 *
 */

domready(() => {

  Router.run(routes, Router.HashLocation, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
  });

});
