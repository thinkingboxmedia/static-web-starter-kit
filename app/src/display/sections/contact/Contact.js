'use strict';

import React, { Component } from 'react';
import reactMixin from 'react-mixin';
import { History } from 'react-router';

/**
 * Contact section
 */
export default class Contact extends Component {

  constructor(props) {

    super(props);
  }

  /**
   * callbackNavigation
   */
  callbackNavigation() {

    this.history.pushState(null, '/');
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    return (
     <section className="section-contact">
        <h2> Contact section!</h2>
        <aside className="navigation">
          <button onClick={this.callbackNavigation.bind(this)} className="navigation" value="Contact">← Back</button>
        </aside>
      </section>
    );
  }
}

/****************
 * Mixins *
 ****************/

reactMixin.onClass(Contact, History);
