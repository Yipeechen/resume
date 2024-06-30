import { combineReducers } from 'redux';

import eventsReducer from '@src/redux/modules/resume/events/reducers';
import overviewReducer from '@src/redux/modules/resume/overview/reducers';
import abilitiesReducer from '@src/redux/modules/resume/abilities/reducers';
import worksReducer from '@src/redux/modules/resume/works/reducers';

const resumeReducer = combineReducers({
  events: eventsReducer,
  overview: overviewReducer,
  abilities: abilitiesReducer,
  works: worksReducer,
});

export default resumeReducer;
