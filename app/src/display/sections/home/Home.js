'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * Home section
 */
export default class Home extends Component {

  constructor(props) {

    super(props);

    this.state = {items: ['HTML5 Boilerplate', 'Sass', 'React.js', '... & more']};
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    return (
      <section className="section-home">
        <h1>Allo!</h1>
        <p>You now have:</p>
        <ul>
          {this.state.items.map(function(item, key) {
            return <li key={key}><span> {item}</span></li>;
          })}
        </ul>
        <aside className="navigation">
          <Link to="/contact">&#9998; <b>Contact</b></Link>
        </aside>
      </section>
    );
  }
}
