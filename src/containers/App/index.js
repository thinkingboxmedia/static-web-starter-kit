import React, { PropTypes } from 'react';

import Header from '../../components/Header';
import Background from '../../components/Background';

import styles from './styles.css' 

/**
 * App component
 */
export default function App ({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div className={styles.wrapper}>
        {children}
      </div>
      <Background />
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element,
}
