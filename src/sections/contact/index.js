import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

/**
 * Contact component
 */
export default class Contact extends Component {

  constructor(props) {
    super(props);
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    return (
	  <section className={styles.section}>
		<div>
		  <h2> Contact section!</h2>
		  <aside className={styles.navigation}>
        <Link to="/">← Back</Link>
		  </aside>
		</div>
	  </section>
    );
  }
}
