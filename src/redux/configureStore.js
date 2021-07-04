import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore () {
  const logger = store => {
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
