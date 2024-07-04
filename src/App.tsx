import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createHashRouter, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import { store } from '@src/redux/configureStore';
import theme from '@src/styles/theme';
import mediaQueries from '@src/styles/mediaQueries';
import { ResetStyle, GlobalStyle } from '@src/styles/reset';
import { PageSpinner } from '@src/components/Spinner';

const Resume = lazy(() => import(/* webpackChunkName: "Resume" */'@src/features/Resume'));
const Yt = lazy(() => import(/* webpackChunkName: "Yt" */'@src/features/Works/WorksYt'));

const routes = createHashRouter([
  {
    path: '/',
    element: (
      <React.Fragment>
        <Helmet>
          <title>{'About Yipee | Resume'}</title>
        </Helmet>
        <Resume />
      </React.Fragment>
    ),
  },
  {
    path: '/works/yt',
    element: (
      <React.Fragment>
        <Helmet>
          <title>{'About Yipee | Work'}</title>
        </Helmet>
        <Yt />
      </React.Fragment>
    ),
  },
  {
    path: '*',
    element: <Navigate to='/#' replace />,
  }
]);

const App = () => (
  <Provider store={store} >
    <ThemeProvider theme={{ ...theme, ...mediaQueries }}>
        <ResetStyle />
        <GlobalStyle />
        <Suspense fallback={<PageSpinner size="50vh" style={{ margin: '25vh auto' }} />}>
          <RouterProvider router={routes} />
        </Suspense>
    </ThemeProvider>
  </Provider>
);

export default App;
