import React, { Component, PropTypes } from 'react';

import styles from './Preloader.css';

/**
 * Preloader component
 */
export default class Preloader extends Component {

  static get propTypes() {
    return {
      loaded: PropTypes.func,
      hidden: PropTypes.func,
    };
  }

  constructor(props, context) {
    super(props, context);
    this.state = { progress: 0 };
  }

  /**
   * componentDidMount
   */
  componentDidMount() {
    window.setTimeout(() => {
      this.props.loaded();
      this.setState({ progress: 100 });
      this.hide();
    }, 1000);
  }

  /**
   * hide
   */
  hide() {
    window.setTimeout(() => {
      this.props.hidden();
    }, 1000);
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return (
      <div className={styles.Preloader}>
        Preloader
      </div>
    );
  }
}
