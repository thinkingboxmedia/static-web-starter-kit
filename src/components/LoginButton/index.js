import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionsUser from '../../actions/user';

/**
 * Redux
 */

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionsUser: bindActionCreators(actionsUser, dispatch),
  };
}

/**
 * LoginButton component
 */

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginButton extends Component {

  static get propTypes() {
    return {
      isLoggedIn: PropTypes.bool,
      actionsUser: PropTypes.object,
    };
  }

  constructor(props, context) {
    super(props, context);
    this.state = {};

    this.clickHandler = this.clickHandler.bind(this);
  }

    /**
   * clickHandler
   */

  clickHandler() {
    if (this.props.isLoggedIn) {
      this.props.actionsUser.logOut();
    } else {
      this.props.actionsUser.logIn();
    }
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const l = (this.props.isLoggedIn) ? 'LogOut' : 'LogIn';

    return (
      <span>
        <a href="#" onClick={this.clickHandler}>{l}</a>
      </span>
    );
  }
}