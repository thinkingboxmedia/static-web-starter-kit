'use strict';

import DOMready from 'domready';
import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';

/**
 *
 */

DOMready(() => {

  ReactDOM.render(routes, document.getElementById('app'));

});
