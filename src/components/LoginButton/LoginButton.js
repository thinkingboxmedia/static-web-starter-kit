import React, { Component, PropTypes } from 'react';

import styles from './LoginButton.css';

/**
 * LoginButton component
 */
export default class LoginButton extends Component {

  static get propTypes() {
    return {
      isLoggedIn: PropTypes.bool,
      login: PropTypes.func.isRequired, // action user
      logout: PropTypes.func.isRequired,  // action user
    };
  }

  static get defaultProps() {
		return {
			isLoggedIn: false,
			login: f => f,
      logout: f => f,
		};
	}

  constructor(props, context) {
    super(props, context);
    this.state = {};
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
    const label = (this.props.isLoggedIn) ? 'Logout' : 'Login';

    return (
      <span className={styles.LoginButton}>
        <a onClick={() => this.clickHandler()}>{label}</a>
      </span>
    );
  }
}
