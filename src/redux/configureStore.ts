import { createStore, applyMiddleware, compose, Store, Middleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer, { RootState } from '@src/redux/root';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore (): Store<RootState> {
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
  const middleware = [logger, thunk];
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

  return store;
}
