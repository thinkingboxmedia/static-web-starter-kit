import { connect } from 'react-redux';
import App from './App';

import { windowResize } from 'src/actions/browser';

export default connect(null, { windowResize })(App);
