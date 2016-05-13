import React, { Component, PropTypes } from 'react';
import ReactF1 from 'react-f1';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginButton from '../LoginButton';

import { states, IDLE, OVER, SELECTED } from './states';
import transitions from './transitions';
import styles from './styles.css';

import * as actionsUser from '../../actions/user';

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
        className={styles.component}
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
          <LoginButton />
        </span>
      </ReactF1>
    );
  }
}
