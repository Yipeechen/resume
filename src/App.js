import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '@src/styles/theme';
import mediaQueries from './styles/mediaQueries';
import { ResetStyle, GlobalStyle } from '@src/styles/reset';
import { PageSpinner } from '@src/components/Spinner';

const Resume = lazy(() => import(/* webpackChunkName: "Resume" */'@src/features/Resume'));
const Yt = lazy(() => import(/* webpackChunkName: "Yt" */'@src/features/Works/WorksYt'));

const routes = [
  {
    path: '/resume',
    exact: true,
    component: Resume,
  },
  {
    path: '/works/yt',
    exact: true,
    component: Yt,
  },
];

const App = () => (
  <ThemeProvider theme={{ ...theme, ...mediaQueries }}>
    <BrowserRouter>
      <ResetStyle />
      <GlobalStyle />
      <Suspense fallback={<PageSpinner size="50vh" style={{ margin: '25vh auto' }} />}>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} exact={route.exact} component={route.component} />
          ))}
          <Route exact path="*" render={() => <Redirect to="/resume" />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
