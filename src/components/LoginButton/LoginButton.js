import React, { Component, PropTypes } from 'react';

import styles from './LoginButton.css';

/**
 * LoginButton component
 */
export default class LoginButton extends Component {

  static get propTypes() {
    return {
      isLoggedIn: PropTypes.bool,
      login: PropTypes.func.isRequired,
      logout: PropTypes.func.isRequired,
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
      this.props.logout();
    } else {
      this.props.login();
    }
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const l = (this.props.isLoggedIn) ? 'Logout' : 'Login';

    return (
      <span className={styles.LoginButton}>
        <a onClick={this.clickHandler}>{l}</a>
      </span>
    );
  }
}
