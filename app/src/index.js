'use strict';

import domready from 'domready';
import React from 'react';

import App from './display/App';

/**
 *
 */

domready(() => {

  React.render(<App />, document.getElementById('app'));

});
