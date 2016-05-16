import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './home.css';

/**
 * Home section
 */
export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	items: ['HTML5 Boilerplate', 'React.js', '... & more']
    };
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    return (
      <section className={styles.home}>
        <h1>Allo!</h1>
        <p>You now have:</p>
        <ul>
          {this.state.items.map(function(item, key) {
            return <li key={key}><span> {item}</span></li>;
          })}
        </ul>
        <aside className={styles.navigation}>
          <Link to="/contact">&#9998; <b>Contact</b></Link>
        </aside>
      </section>
    );
  }
}