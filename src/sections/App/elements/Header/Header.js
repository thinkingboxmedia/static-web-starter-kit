import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactF1 from 'react-f1';

import LikeButton from 'src/components/LikeButton';

import { states, IDLE, OUT } from './HeaderF1States';
import transitions from './HeaderF1Transitions';
import styles from './Header.css';

/**
 * Header component
 */

export default class Header extends Component {

  static get propTypes() {
    return {
      children: PropTypes.element,
    };
  }

  static get defaultProps() {
		return {
			children: null,
		};
	}

  constructor(props, context) {
    super(props, context);
    this.state = {
      go: OUT,
    };
  }

  /**
   * componentDidMount
   */
  componentDidMount() {
    this.setState({ go: IDLE });
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return (
      <ReactF1
        className={styles.Header}
        data-f1="container"
        go={this.state.go}
        states={states()}
        transitions={transitions()}
      >
        <LikeButton />
        <span className={styles.actions}>
          {this.props.children}
        </span>
      </ReactF1>
    );
  }
}
