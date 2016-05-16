import React, { PropTypes } from 'react';

import Header from '../../components/Header';

import styles from './App.css';

/**
 * App component
 */

const PROP_TYPES = {
  children: PropTypes.element,
};

export default function App({ children }) {
  return (
    <div>
      <Header />
      <div className={styles.App}>
        {children}
      </div>
    </div>
  );
}

App.propTypes = PROP_TYPES;
