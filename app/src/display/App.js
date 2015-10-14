'use strict';

import React, { Component } from 'react';

import Header from './components/header/Header';

/**
 * App
 */
export default class App extends Component {

  constructor(props) {

    super(props);

    /* Test spec value */
    this.start = 300;

    this.state = {isLoaded: false};
  }

  /**
   * componentDidMount
   */
  componentDidMount() {

    this.setState({ isLoaded: true });
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    var app = (this.state.isLoaded) ? this.renderApp() : '';

    return (
      <div className="wrapper">
        {app}
      </div>
    );
  }

  /**
   * renderApp
   * @return {ReactElement} markup
   */
  renderApp() {

    return (
      <div className="wrapper">
        <Header />
        <div className="sections">
          {this.props.children}
        </div>
      </div>
    );
  }
}
