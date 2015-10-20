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

    var routerStore = new RouterStore();
    routerStore.updated.add(this.routerUpdatedHandler);
  }

  /**
   * componentDidMount
   */

  componentDidMount() {


  }

  /**
   * routerUpdatedHandler
   */

  routerUpdatedHandler(route) {

    console.log('routerUpdatedHandler > background::update', route);

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
