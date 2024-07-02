import { combineReducers } from '@reduxjs/toolkit'

import ytVideosReducer from '@src/redux/modules/worksYt/worksYtSlice';
import resumeReducer from '@src/redux/modules/resume';


const rootReducer = combineReducers({
  yt: ytVideosReducer,
  resume: resumeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
