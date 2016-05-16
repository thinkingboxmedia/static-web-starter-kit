import React, { Component, PropTypes } from 'react';
import ReactF1 from 'react-f1';

import UserLoginButton from '../User/LoginButton';

import { states, IDLE, OVER, SELECTED } from './HeaderF1States';
import transitions from './HeaderF1Transitions';
import styles from './Header.css';

/**
 * Header component
 */

export default class Header extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      go: IDLE,
      isSelected: false,
    };

    this.clickLikeHandler = this.clickLikeHandler.bind(this);
    this.mouseOverLikeHandler = this.mouseOverLikeHandler.bind(this);
    this.mouseOutLikeHandler = this.mouseOutLikeHandler.bind(this);
  }

  /**
   * clickLikeHandler
   */

  clickLikeHandler() {
    const isSelected = !this.state.isSelected;

    this.setState({
      go: (isSelected) ? SELECTED : OVER,
      isSelected,
    });
  }

  /**
   * mouseOverLikeHandler
   */

  mouseOverLikeHandler() {
    if (this.state.go === IDLE) {
      this.setState({
        go: OVER,
      });
    }
  }

  /**
   * mouseOutLikeHandler
   */

  mouseOutLikeHandler() {
    if (this.state.go === OVER) {
      this.setState({
        go: IDLE,
      });
    }
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return (
      <ReactF1
        className={styles.Header}
        go={this.state.go}
        states={states()}
        transitions={transitions()}
      >
        <span
          data-f1="icon"
          className={styles.icon}
          onClick={this.clickLikeHandler}
          onMouseOver={this.mouseOverLikeHandler}
          onMouseOut={this.mouseOutLikeHandler}
        >
          ♡
        </span>
        <span className={styles.login}>
          <UserLoginButton />
        </span>
      </ReactF1>
    );
  }
}
