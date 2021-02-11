import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import store from './redux/configureStore';
import theme from '@src/styles/theme';
import mediaQueries from './styles/mediaQueries';
import { ResetStyle, GlobalStyle } from '@src/styles/reset';
import { PageSpinner } from '@src/components/Spinner';

const Resume = lazy(() => import(/* webpackChunkName: "Resume" */'@src/features/Resume'));
const Yt = lazy(() => import(/* webpackChunkName: "Yt" */'@src/features/Works/WorksYt'));

const routes = [
  {
    path: '/',
    exact: true,
    component: Resume,
    pageMeta: {
      title: 'About Yipee | Resume',
    },
  },
  {
    path: '/works/yt',
    exact: true,
    component: Yt,
    pageMeta: {
      title: 'About Yipee | Work',
    },
  },
];

const App = () => (
  <Provider store={store()} >
    <ThemeProvider theme={{ ...theme, ...mediaQueries }}>
      <HashRouter basename="/">
        <ResetStyle />
        <GlobalStyle />
        <Suspense fallback={<PageSpinner size="50vh" style={{ margin: '25vh auto' }} />}>
          <Switch>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                render={routeProps => (
                  <>
                    <Helmet>
                      <title>{route.pageMeta.title}</title>
                    </Helmet>
                    <route.component {...routeProps} />
                  </>
                )} />
            ))}
            <Route
              exact
              path="*"
              render={() => <Redirect to="/" />} />
          </Switch>
        </Suspense>
      </HashRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
