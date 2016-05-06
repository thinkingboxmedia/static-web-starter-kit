import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

/**
 * Home component
 */
 /**
 * Contact component
 */
export default function Contact() {
  return (
    <section className={styles.wrapper}>
      Homepage section
      <Link to="/contact">&#9998; <b>Contact</b></Link>
    </section>
  );
}
