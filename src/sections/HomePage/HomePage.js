import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getStatus } from 'src/api/github';

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
  async componentDidMount() {
    const result = await getStatus();
    console.log(result);
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
