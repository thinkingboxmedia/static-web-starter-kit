import { connect } from 'react-redux';

import App from './App';

import resize from '../../actions/browser';

export default connect(null, { resize })(App);
