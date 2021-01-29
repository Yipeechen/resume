import { combineReducers } from 'redux';

import ytVideosReducer from './modules/worksYt';

const rootReducer = combineReducers({
  yt: ytVideosReducer,
});

export default rootReducer;
