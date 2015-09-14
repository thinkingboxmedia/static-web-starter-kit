'use strict';

import React, { Component } from 'react';

/**
 * Header component
 */
export default class Header extends Component {

  constructor() {

    super();
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    return (
      <div>
        <header className="component-header">
          <h2>♡</h2>
        </header>
      </div>
    );
  }
}
