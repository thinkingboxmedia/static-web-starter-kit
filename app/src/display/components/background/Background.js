'use strict';

import React, { Component } from 'react';
//import { VelocityComponent } from 'velocity-react';

import RouterStore from '../../../store/RouterStore';

/**
 * Background component
 */
export default class Background extends Component {

  constructor(props) {

    super(props);

    this.state = {
      section: '',
    };

    this._routerStore = new RouterStore();
    this._routerStore.changed.add(this.routerChangedHandler.bind(this));
  }

  /**
   * componentDidMount
   */

  componentDidMount() {


  }

  /**
   * routerChangedHandler
   */

  routerChangedHandler() {

    console.log(this._routerStore.route);

  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    return (
      <div className="component-background">

      </div>
    );
  }
}
