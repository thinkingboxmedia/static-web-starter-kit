'use strict';

import React, { Component } from 'react';

/**
 * Application component
 */
export default class App extends Component {

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

React.render(<App />, document.getElementById('app'))
