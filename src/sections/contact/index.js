import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

/**
 * Contact component
 */
export default function Contact() {
  return (
    <section className={styles.wrapper}>
      Contact section
      <Link to="/">&#9998; <b>Home</b></Link>
    </section>
  );
}
