'use strict';

import React, { Component } from 'react';

/**
 * Background component
 */
export default class Background extends Component {

  constructor(props) {

    super(props);

    this.state = {
      section: 'home',
    };
  }

  /**
   * componentDidMount
   */

  componentDidMount() {


  }

  /**
   * onChange
   */

  onChange(req) {

    console.log('req', req);
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    var style = 'component-background ' + this.state.section;

    return (
      <div className={style} />
    );
  }
}
