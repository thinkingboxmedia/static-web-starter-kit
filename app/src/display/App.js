'use strict';

import React, { Component } from 'react';

/**
 * Application component
 */
export default class App extends Component {

  constructor() {

    super();

    /* Test spec value */
    this.start = 300;
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    return (
      <div>
        App
      </div>
    );
  }
}
