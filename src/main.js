import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import makeRoutes from './routes';
import Root from './routes/App/Root';
import configureStore from './store/configure';
import { trackPage } from './api/analytics';

require('./utils/device').detect(); // mobile / tablet / desktop?

// Configure history for react-router
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: '/',
});
const store = configureStore(window.__INITIAL_STATE__, browserHistory);  // eslint-disable-line
const history = syncHistoryWithStore(browserHistory, store);

history.listen((location) => {
  if (location) {
    trackPage(location.pathname);
  }
});

const routes = makeRoutes(store);

ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
);
