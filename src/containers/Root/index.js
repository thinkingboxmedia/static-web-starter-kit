import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

const propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
};

class Root extends React.Component {

  render () {
    return (
      <Provider store={this.props.store} key="provider">
        <div>
          <Router history={this.props.history}>
            {this.props.routes}
          </Router>
        </div>
      </Provider>
    )
  }
}

Root.propTypes = propTypes;

module.exports = Root;
