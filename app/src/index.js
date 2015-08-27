'use strict';

import domready from 'domready';
import React from 'react';

import routes from './routes';

/**
 *
 */

domready(() => {

  React.render(routes, document.getElementById('app'));

});
