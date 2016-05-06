import React, { PropTypes } from 'react';

import Header from '../../components/Header';
import Background from '../../components/Background';

import styles from './styles.css';

/**
 * App component
 */

const PROP_TYPES = {
  children: PropTypes.element,
};

export default function App({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.wrapper}>
        {children}
      </div>
      <Background />
    </div>
  );
}

App.propTypes = PROP_TYPES;
