import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './styles.css' 

/**
 * HomeView component
 */
export default class Home extends Component {

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
        Homepage section
        <Link to="/contact">&#9998; <b>Contact</b></Link>
      </section>
    );
  }
}
