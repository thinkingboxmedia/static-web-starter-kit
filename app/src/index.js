'use strict';

import domready from 'domready';
import React from 'react';
import Router from 'react-router';

import routes from './routes';

/**
 *
 */

domready(() => {

  React.render(routes, document.getElementById('app'));

});
