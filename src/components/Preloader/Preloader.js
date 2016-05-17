import React, { Component } from 'react';

import styles from './Preloader.css';

/**
 * Preloader component
 */

export default class Preloader extends Component {

  constructor(props) {

    super(props);

  }

  /**
   * componentDidMount
   */

  componentDidMount() {


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