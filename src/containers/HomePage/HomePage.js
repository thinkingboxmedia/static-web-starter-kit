import React, { Component } from 'react';
import { Link } from 'react-router';

import request from '../../utils/request';

import styles from './HomePage.css';

/**
 * HomePage section
 */
export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: ['HTML5 Boilerplate', 'React.js', '... & more'],
    };
  }

  /**
   * componentDidMount
   */
  componentDidMount() {
    const result = request('https://api.github.com');
    result.then((response) => {
      window.console.log('response', response);
      window.console.log('header', response.headers.get('Content-Type'));
      return response.text();
    }).then((text) => {
      window.console.log('got text', text);
    }).catch((ex) => {
      window.console.log('failed', ex);
    });
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return (
      <section className={styles.homePage}>
        <h1>Allo!</h1>
        <p>You now have:</p>
        <ul>
          {this.state.items.map((item, key) => <li key={key}><span> {item}</span></li>)}
        </ul>
        <aside className={styles.navigation}>
          <Link to="/contact">&#9998; <b>Contact</b></Link>
        </aside>
      </section>
    );
  }
}
