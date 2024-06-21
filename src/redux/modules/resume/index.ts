import { combineReducers } from 'redux';

import eventsReducer from '@src/redux/modules/resume/events/reducers';
import overviewReducer from '@src/redux/modules/resume/overview/reducers';

const resumeReducer = combineReducers({
  events: eventsReducer,
  overview: overviewReducer,
});

export default resumeReducer;
