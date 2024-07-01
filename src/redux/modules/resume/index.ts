import { combineReducers } from 'redux';

import eventsReducer from '@src/redux/modules/resume/events/slice';
import overviewReducer from '@src/redux/modules/resume/overview/slice';
import abilitiesReducer from '@src/redux/modules/resume/abilities/slice';
import worksReducer from '@src/redux/modules/resume/works/slice';

const resumeReducer = combineReducers({
  events: eventsReducer,
  overview: overviewReducer,
  abilities: abilitiesReducer,
  works: worksReducer,
});

export default resumeReducer;
