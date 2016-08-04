import { connect } from 'react-redux';

import Preloader from './Preloader';

const mapStateToProps = (state) => ({
  stageWidth: state.browser.stageWidth,
  stageHeight: state.browser.stageHeight,
});

export default connect(mapStateToProps, null)(Preloader);
