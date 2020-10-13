import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Resume from '@src/features/Resume';

const routes = [
  {
    path: '/',
    exact: true,
    component: Resume,
  },
];

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} path={route.path} exact={route.exact} component={route.component} />
      ))}
      <Route exact path="*" render={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>
);

export default App;
