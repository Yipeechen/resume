import { ActionTypes } from './worksYtActionTypes';

const initialState = {
  videos: [],
  nextPageToken: null,
  loading: false,
  error: null,
};

interface Action {
  type: ActionTypes;
  payload: any;
}

export default function ytVideosReducer (state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.CLEAR_PLAYLIST:
      return initialState;
    case ActionTypes.FETCH_POPULAR_VIDEO:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_POPULAR_VIDEO_SUCCESS:
      return {
        ...state,
        videos: [...state.videos, ...action.payload.items],
        nextPageToken: action.payload.nextPageToken,
        loading: false,
        error: null,
      };
    case ActionTypes.FETCH_POPULAR_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.SEARCH_VIDEO:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.SEARCH_VIDEO_SUCCESS:
      return {
        ...state,
        videos: [...state.videos, ...action.payload.items],
        nextPageToken: action.payload.nextPageToken,
        loading: false,
        error: null,
      };
    case ActionTypes.SEARCH_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
