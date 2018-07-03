import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import App from '../../ui/App';

const browserHistory = createBrowserHistory();

export default () => (
  <Router history={browserHistory}>
    <Route exact path="/" component={App} />
  </Router>
);
