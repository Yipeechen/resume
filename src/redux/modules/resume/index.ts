import { combineReducers } from 'redux';

import eventsReducer from '@src/redux/modules/resume/events/reducers';
import overviewReducer from '@src/redux/modules/resume/overview/reducers';
import abilitiesReducer from '@src/redux/modules/resume/abilities/reducers';

const resumeReducer = combineReducers({
  events: eventsReducer,
  overview: overviewReducer,
  abilities: abilitiesReducer,
});

export default resumeReducer;
