import { combineReducers } from 'redux';

import ytVideosReducer from '@src/redux/modules/worksYt/worksYtReducers';
import resumeReducer from '@src/redux/modules/resume';

const rootReducer = combineReducers({
  yt: ytVideosReducer,
  resume: resumeReducer,
});

export default rootReducer;
