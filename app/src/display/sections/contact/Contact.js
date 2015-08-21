'use strict';

import React, { Component, PropTypes } from 'react';
import { TransitionSpring, Spring } from 'react-motion';

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

    console.log(this.context);

    return (
     <section className="section-contact">
       <Spring defaultValue={{val: 0}} endValue={{val: 400}}>
         {interpolated =>
           <h2 style={{
              transform: `translate3d(${interpolated.val}px, 0, 0)`
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
