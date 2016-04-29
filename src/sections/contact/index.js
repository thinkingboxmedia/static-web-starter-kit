import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './styles.css' 

/**
 * ContactView component
 */
export default class Contact extends Component {

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
      <section className={styles.wrapper}>
        Contact section
        <Link to="/">&#9998; <b>Home</b></Link>
      </section>
    );
  }
}
