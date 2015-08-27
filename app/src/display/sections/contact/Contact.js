'use strict';

import React, { Component, PropTypes } from 'react';
import { TransitionSpring, Spring } from 'react-motion';

/**
 * Application component
 */
export default class Contact extends Component {

  constructor(props) {

    super(props);

    this.state = {isClosing: false};
  }

  /**
   * callbackNavigation
   */
  callbackNavigation() {

    //this.context.router.transitionTo('/');

    this.setState({isClosing: true});
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    return (
     <section className="section-contact">
       <Spring defaultValue={0} endValue={this.state.isClosing ? 0 : 400}>
         {val =>
           <h2 style={{
              transform: `translate3d(${val}px, 0, 0)`
            }} >Contact section!</h2>
         }
       </Spring>
        <aside className="navigation">
          <button onClick={this.callbackNavigation.bind(this)} className="navigation" value="Contact">← Back</button>
        </aside>
      </section>
    );
  }
}

Contact.contextTypes = {router: PropTypes.func}
