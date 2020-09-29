import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import userPage from './routes/userPage'
import modelTest from './routes/modelTest'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/userPage" exact component={userPage} />
        <Route path="/modelTest" exact component={modelTest} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
