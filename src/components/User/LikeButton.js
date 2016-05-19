import React, { Component } from 'react';
import ReactF1 from 'react-f1';

import { states, IDLE, OVER, SELECTED } from './LikeButtonF1States';
import transitions from './LikeButtonF1Transitions';
import styles from './LikeButton.css';

/**
 * LikeButton component
 */
export default class LikeButton extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      go: IDLE,
      isSelected: false,
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
  }

  /**
   * clickHandler
   */

  clickHandler() {
    const isSelected = !this.state.isSelected;

    this.setState({
      go: (isSelected) ? SELECTED : OVER,
      isSelected,
    });
  }

  /**
   * mouseOverHandler
   */

  mouseOverHandler() {
    if (this.state.go === IDLE) {
      this.setState({
        go: OVER,
      });
    }
  }

  /**
   * mouseOutHandler
   */

  mouseOutHandler() {
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
        className={styles.LikeButton}
        go={this.state.go}
        states={states()}
        transitions={transitions()}
      >
        <span
          data-f1="icon"
          className={styles.icon}
          onClick={this.clickHandler}
          onMouseOver={this.mouseOverHandler}
          onMouseOut={this.mouseOutHandler}
        >
          ♡
        </span>
      </ReactF1>
    );
  }
}
