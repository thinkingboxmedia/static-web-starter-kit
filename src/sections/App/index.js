import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './App';

import { windowResize } from 'src/actions/browser';

export default withRouter(connect(null, { windowResize })(App));
