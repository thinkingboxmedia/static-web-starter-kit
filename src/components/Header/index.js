import React, { Component } from 'react';
import ReactF1 from 'react-f1';

import states from './states'
import transitions from './transitions';
import styles from './styles.css' 

/**
 * ContactView Header
 */
export default class Header extends Component {

  constructor(props) {

    super(props);

    this.clickHandler = this.clickHandler.bind(this);
    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);

    this.state = {
      go: 'idle',
      isSelected: false,
    };
  }

  /**
   * componentDidMount
   */

  componentDidMount() {


  }

  /**
   * clickHandler
   */

  clickHandler() {

    const isSelected = !this.state.isSelected;

    this.setState({
      go : (isSelected) ? 'selected' : 'over',
      isSelected: isSelected,
    });
  }

  /**
   * mouseOverHandler
   */

  mouseOverHandler() {

    if (this.state.go === 'idle') {
      this.setState({
        go: 'over',
      });
    }
  }

  /**
   * mouseOutHandler
   */

  mouseOutHandler() {

    if (this.state.go === 'over') {
      this.setState({
        go: 'idle',
      });
    }
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    return (
      <ReactF1 className={styles.wrapper}
        go={this.state.go}
        states={states()}
        transitions={transitions()}
      >
        <h1>Header</h1>
        <h2 data-f1="icon" className={styles.icon}
          onClick={this.clickHandler}
          onMouseOver={this.mouseOverHandler}
          onMouseOut={this.mouseOutHandler}
        >
          ♡
        </h2>
      </ReactF1>
    );
  }
}
