import { connect } from 'react-redux';

import Preloader from './Preloader';

const mapStateToProps = (state) => ({
  stageHeight: state.browser.stageHeight,
});

export default connect(mapStateToProps, null)(Preloader);
