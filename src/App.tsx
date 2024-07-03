import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import { store } from '@src/redux/configureStore';
import theme from '@src/styles/theme';
import mediaQueries from '@src/styles/mediaQueries';
import { ResetStyle, GlobalStyle } from '@src/styles/reset';
import { PageSpinner } from '@src/components/Spinner';

const Resume = lazy(() => import(/* webpackChunkName: "Resume" */'@src/features/Resume'));
const Yt = lazy(() => import(/* webpackChunkName: "Yt" */'@src/features/Works/WorksYt'));

const routes = [
  {
    path: '/',
    index: true,
    component: Resume,
    pageMeta: {
      title: 'About Yipee | Resume',
    },
  },
  {
    path: '/dd',
    component: Yt,
    pageMeta: {
      title: 'About Yipee | dd',
    },
  },
  {
    path: '/works/yt',
    component: Yt,
    pageMeta: {
      title: 'About Yipee | Work',
    },
  },
];

const AppRoutes = () => {
  const elements = useRoutes([
    ...routes.map(route => ({
      path: route.path,
      element: (
        <React.Fragment>
          <Helmet>
            <title>{route.pageMeta.title}</title>
          </Helmet>
          <route.component />
        </React.Fragment>
      )
    })),
    {
      path: '*',
      element: <Navigate to='/' replace />,
    }
  ]);

  return elements;
};

const App = () => (
  <Provider store={store} >
    <ThemeProvider theme={{ ...theme, ...mediaQueries }}>
      <BrowserRouter basename='/'>
        <ResetStyle />
        <GlobalStyle />
        <Suspense fallback={<PageSpinner size="50vh" style={{ margin: '25vh auto' }} />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
