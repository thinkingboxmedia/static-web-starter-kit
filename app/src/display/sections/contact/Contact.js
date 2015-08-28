'use strict';

import React, { Component } from 'react';

/**
 * Application component
 */
export default class Contact extends Component {

  constructor(props) {

    super(props);
  }

  /**
   * callbackNavigation
   */
  callbackNavigation() {

    this.context.router.transitionTo('/');
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

Contact.contextTypes = {

  router: function() {

    return React.PropTypes.func.isRequired;
  },
};
