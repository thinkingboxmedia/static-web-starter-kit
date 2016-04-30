import React, { Component } from 'react';

import styles from './styles.css' 

/**
 * Preloader component
 */
class Preloader extends Component {

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
      <div className={styles.wrapper}>
        Preloader
      </div>
    );
  }
}

module.exports = Preloader;
