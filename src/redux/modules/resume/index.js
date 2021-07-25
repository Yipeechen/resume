import { combineReducers } from 'redux';

import eventsReducer from './events/reducers';

const resumeReducer = combineReducers({
  events: eventsReducer,
});

export default resumeReducer;
