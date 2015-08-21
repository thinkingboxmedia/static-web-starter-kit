'use strict';

import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

import Header from './components/header/Header';

/**
 * Application component
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
      <div>
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
      <section>
        <Header />
          <RouteHandler />
      </section>
    );
  }
}
