import { configureStore } from '@reduxjs/toolkit'
import { Middleware } from 'redux';

import rootReducer, { RootState } from '@src/redux/root';

const logger: Middleware<{}, RootState> = (store) => {
  return next => {
    return action => {
      console.info('[Middleware] Dispatching', action);
      const result = next(action);
      console.info('[Middleware] next state', store.getState());
      return result;
    };
  };
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    const middleware = getDefaultMiddleware().concat(logger);
    return middleware;
  }
});

export type AppDispatch = typeof store.dispatch
