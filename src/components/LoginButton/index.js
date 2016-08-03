import { connect } from 'react-redux';

import LoginButton from './LoginButton';

import { login, logout } from '../../actions/user';

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps, { login, logout })(LoginButton);
