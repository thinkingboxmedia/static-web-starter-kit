'use strict';

import React, { Component } from 'react';
import reactMixin from 'react-mixin';
import { History } from 'react-router';
import { VelocityComponent } from 'velocity-react';

/**
 * Contact section
 */
export default class Contact extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isLoaded: false,
    };

    this._defaultStyle = {
      container: {
        opacity: 0,
        position: 'relative',
        top: '-100px',
      },
      button: {
        position: 'relative',
        left: '100px',
        opacity: 0,
      },
    };

    /**
     * Animations
     */

    this._animationProps = {

      show: {

        container: {
          duration: 500,
          animation: {
            opacity: [1, 'easeInQuint'],
            top: [0, 'easeInOutExpo'],
          },
        },

        button: {
          duration: 500,
          delay: 500,
          animation: {
            left: [0, 'easeInOutExpo'],
            opacity: 1,
          },
        },

      },

      hide: {

        container: {
          duration: 500,
          delay: 400,
          animation: {
            opacity: [this._defaultStyle.container.opacity, 'easeOutQuint'],
            top: [this._defaultStyle.container.top, 'easeInOutExpo'],
          },
          complete: function(elements) {

            this.history.pushState(null, '/');

          }.bind(this),
        },

        button: {
          duration: 500,
          animation: {
            left: [this._defaultStyle.button.left, 'easeInOutExpo'],
            opacity: [this._defaultStyle.button.opacity, 'easeInOutExpo'],
          },
        },

      },
    };
  }

  /**
   * componentDidMount
   */

  componentDidMount() {

    this.show();
  }

  /**
   * show
   */
  show() {

    this.setState({
      isLoaded: true,
    });
  }

  /**
   * hide
   */
  hide() {

    this.setState({
      isLoaded: false,
    });
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    var animationContainerProps = (this.state.isLoaded) ? this._animationProps.show.container : this._animationProps.hide.container;
    var animationButtonProps = (this.state.isLoaded) ? this._animationProps.show.button : this._animationProps.hide.button;

    return (
       <section className="section-contact">
          <VelocityComponent {...animationContainerProps}>
            <div style={this._defaultStyle.container}>
              <h2> Contact section!</h2>
              <aside className="navigation">
                <VelocityComponent {...animationButtonProps}>
                  <button onClick={this.hide.bind(this)} style={this._defaultStyle.button} className="navigation" value="Contact">← Back</button>
                </VelocityComponent>
              </aside>
            </div>
          </VelocityComponent>
        </section>
    );
  }
}

/****************
 * Mixins *
 ****************/

reactMixin.onClass(Contact, History);
