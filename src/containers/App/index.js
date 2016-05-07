import React, { PropTypes } from 'react';

import Header from '../../components/Header';

import styles from './styles.css';

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
      <div className={styles.wrapper}>
        {children}
      </div>
    </div>
  );
}

App.propTypes = PROP_TYPES;
