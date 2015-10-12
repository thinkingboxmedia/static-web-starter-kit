'use strict';

import DOMready from 'domready';
import { render } from 'react-dom';

import routes from './routes';

/**
 *
 */

DOMready(() => {

  render(routes, document.getElementById('app'));

});
