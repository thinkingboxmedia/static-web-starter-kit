'use strict';

import React, { Component } from 'react';
import { VelocityComponent } from 'velocity-react';

/**
 * Header component
 */
export default class Header extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isToggle: false,
      isActivate: false
    };
  }

  /**
   * componentDidMount
   */

  componentDidMount() {

   this.setState({ isActivate: true });

  }

  /**
   * toggle
   */

  toggle() {

    this.setState({
      isToggle : true,
      isActivate: !this.state.isActivate
    });

  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    const delay = this.state.isToggle ? 0 : 100;
    const nodeStyle = this.state.isToggle ? { } : {opacity: 0, top: '-40px'};

    const animation = {
      opacity: this.state.isActivate ? 1 : 0.5,
      rotateY: this.state.isActivate ? 0 : 180,
      transformOriginY: ['50%', '50%'],
      top: 0
    };

    return (
      <div>
          <header className="component-header">
            <VelocityComponent delay={delay} duration={300} animation={animation}>
              <h2 style={nodeStyle} onClick={this.toggle.bind(this)}>♡</h2>
            </VelocityComponent>
          </header>
      </div>
    );
  }
}
