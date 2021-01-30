import * as actionTypes from './worksYtActionTypes';

const initialState = {
  videos: [],
  nextPageToken: null,
  loading: false,
  error: null,
};

export default function ytVideosReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CLEAR_PLAYLIST:
      return initialState;
    case actionTypes.SEARCH_VIDEO:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SEARCH_VIDEO_SUCCESS:
      return {
        ...state,
        videos: [...state.videos, ...action.payload.items],
        nextPageToken: action.payload.nextPageToken,
        loading: false,
        error: null,
      };
    case actionTypes.SEARCH_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
