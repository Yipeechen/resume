import { combineReducers } from 'redux';

import eventsReducer from '@src/redux/modules/resume/events/reducers';

const resumeReducer = combineReducers({
  events: eventsReducer,
});

export default resumeReducer;
