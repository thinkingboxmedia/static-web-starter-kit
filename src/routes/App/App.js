import React, { Component, PropTypes } from 'react';
import Resize from 'brindille-resize';

import Header from '../../components/Header';
import Preloader from '../../components/Preloader';

import LoginButton from '../../components/LoginButton';

import styles from './App.css';

/**
 * App component
 */
export default class App extends Component {

  static get propTypes() {
    return {
      resize: PropTypes.func.isRequired,
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
    this.resizeHandler = this.resizeHandler.bind(this);
  }

  /**
   * componentDidMount
   */
  componentDidMount() {
    this.resizeHandler();
    Resize.addListener(this.resizeHandler);
  }

  /**
   * componentWillUnmount
   */
  componentWillUnmount() {
    Resize.removeListener(this.resizeHandler);
  }

  /**
   * resizeHandler
   */
  resizeHandler() {
    this.props.resize(Resize.width, Resize.height);
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
        <div>
          <Header>
            <LoginButton />
          </Header>
        </div>
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
