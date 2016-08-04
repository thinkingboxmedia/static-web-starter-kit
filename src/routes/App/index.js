import { connect } from 'react-redux';

import App from './App';

import { resize } from '../../actions/browser';

const mapStateToProps = (state) => ({
  stageWidth: state.browser.stageWidth,
  stageHeight: state.browser.stageHeight,
});

export default connect(mapStateToProps, { resize })(App);
