import React, { Component, PropTypes } from 'react';

import LoginButton from '../../components/User/LoginButton';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './userActions';

/**
 * Redux
 */

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

/**
 * LoginButton component
 */
@connect(mapStateToProps, mapDispatchToProps)
export default class LoginButtonContainer extends Component {

  static get propTypes() {
    return {
      isLoggedIn: PropTypes.bool,
      actions: PropTypes.object,
    };
  }

  constructor(props, context) {
    super(props, context);
    this.state = {};

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  /**
   * logIn
   */
  logIn() {
    this.props.actions.logIn();
  }

   /**
   * logOut
   */
  logOut() {
    this.props.actions.logOut();
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return (
      <LoginButton isLoggedIn={this.props.isLoggedIn} onLogIn={this.logIn} onLogOut={this.logOut} />
    );
  }
}
