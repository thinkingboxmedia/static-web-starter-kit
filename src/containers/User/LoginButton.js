import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import LoginButton from '../../components/User/LoginButton';
import { logIn, logOut } from './userActions';

/**
 * Redux
 */

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
});

/**
 * LoginButton component
 */
@connect(mapStateToProps, { logIn, logOut })
export default class LoginButtonContainer extends Component { // eslint-disable-line

  static get propTypes() {
    return {
      isLoggedIn: PropTypes.bool,
      logIn: PropTypes.func,
      logOut: PropTypes.func,
    };
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return (
      <LoginButton
        isLoggedIn={this.props.isLoggedIn}
        onLogIn={this.props.logIn}
        onLogOut={this.props.logOut}
      />
    );
  }
}
