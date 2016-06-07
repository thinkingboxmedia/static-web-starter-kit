import React, { Component, PropTypes } from 'react';

import { Header, Preloader } from '../../components';

import styles from './App.css';

/**
 * App component
 */
export default class App extends Component {

  static get propTypes() {
    return {
      children: PropTypes.element,
    };
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      isPreloaderLoaded: false,
      isPreloaderHidden: false,
    };

    this.preloaderLoadedHandler = this.preloaderLoadedHandler.bind(this);
    this.preloaderHiddenHandler = this.preloaderHiddenHandler.bind(this);
  }

  /**
   * preloaderLoadedHandler
   */
  preloaderLoadedHandler() {
    this.setState({ isPreloaderLoaded: true });
  }

  /**
   * preloaderHiddenHandler
   */
  preloaderHiddenHandler() {
    this.setState({ isPreloaderHidden: true });
  }

  /**
   * renderContent
   * @return {ReactElement} markup
   */
  renderContent() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const p = (
      <Preloader onLoaded={this.preloaderLoadedHandler} onHidden={this.preloaderHiddenHandler} />
    );
    let preloader = (this.state.isPreloaderHidden) ? '' : p;
    let content = (this.state.isPreloaderLoaded) ? this.renderContent() : '';

    return (
      <div className={styles.App}>
        {preloader}
        {content}
      </div>
    );
  }
}
