import React, { Component } from 'react';
import ReactF1 from 'react-f1';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { states, IDLE, OVER, SELECTED } from './states'
import transitions from './transitions';
import styles from './styles.css' 
import i18n from './i18n';

import * as actionsUser from '../../actions/user';

/**
 * Header component
 */

const initialState = {
  go: IDLE,
  isSelected: false,
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionsUser: bindActionCreators(actionsUser, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Header extends Component {

  constructor(props, context) {

    super(props, context);
    this.state = initialState;

    this.clickLogHandler = this.clickLogHandler.bind(this);
    this.clickLikeHandler = this.clickLikeHandler.bind(this);
    this.mouseOverLikeHandler = this.mouseOverLikeHandler.bind(this);
    this.mouseOutLikeHandler = this.mouseOutLikeHandler.bind(this);
  }

  /**
   * componentDidMount
   */

  componentDidMount() {

  }

  /**
   * clickLogHandler
   */

  clickLogHandler() {

    if (this.props.isLoggedIn) {
      this.props.actionsUser.logOut()
    } else {
      this.props.actionsUser.logIn()
    }
    
  }

  /**
   * clickLikeHandler
   */

  clickLikeHandler() {

    const isSelected = !this.state.isSelected;

    this.setState({
      go : (isSelected) ? SELECTED : OVER,
      isSelected: isSelected,
    });
  }

  /**
   * mouseOverLikeHandler
   */

  mouseOverLikeHandler() {

    if (this.state.go === IDLE) {
      this.setState({
        go: OVER,
      });
    }
  }

  /**
   * mouseOutLikeHandler
   */

  mouseOutLikeHandler() {

    if (this.state.go === OVER) {
      this.setState({
        go: IDLE,
      });
    }
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    const l = (this.props.isLoggedIn) ? i18n.LOGOUT : i18n.LOGIN;

    return (
      <ReactF1 className={styles.wrapper}
        go={this.state.go}
        states={states()}
        transitions={transitions()}
      >
        <h1>Header</h1>
        <h2 data-f1="icon" className={styles.icon}
          onClick={this.clickLikeHandler}
          onMouseOver={this.mouseOverLikeHandler}
          onMouseOut={this.mouseOutLikeHandler}
        >
          ♡
        </h2>
        <h3 onClick={this.clickLogHandler}>{l}</h3>
      </ReactF1>
    );
  }
}
