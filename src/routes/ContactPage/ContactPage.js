import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './ContactPage.css';

/**
 * ContactPage component
 */
export default class ContactPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hi: ['Hello', 'Bonjour', '¡Hola'],
    };
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return (
      <section className={styles.contactPage}>
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
