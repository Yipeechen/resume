import { combineReducers } from 'redux';

import ytVideosReducer from './modules/worksYt/worksYtReducers';

const rootReducer = combineReducers({
  yt: ytVideosReducer,
});

export default rootReducer;
