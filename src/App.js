import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '@src/styles/theme';
import { ResetStyle, GlobalStyle } from '@src/styles/reset';
import Resume from '@src/features/Resume';

const routes = [
  {
    path: '/',
    exact: true,
    component: Resume,
  },
];

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <ResetStyle />
      <GlobalStyle />
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} exact={route.exact} component={route.component} />
        ))}
        <Route exact path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
