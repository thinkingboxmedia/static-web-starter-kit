require('es6-object-assign').polyfill()

import DOMReady from 'detect-dom-ready'
import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import makeRoutes from './routes'
import Root from './containers/Root'
import configureStore from './store/configure'

// Configure history for react-router
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: '/',
})

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router,
})

const routes = makeRoutes(store)

DOMReady(function() {
  ReactDOM.render(
    <Root history={history} routes={routes} store={store} />,
	document.getElementById('root')
  )
})
