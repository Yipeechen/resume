import axios from 'axios';

// Create Redux action types
const CLEAR_PLAYLIST = 'CLEAR_PLAYLIST';
const SEARCH_VIDEO = 'SEARCH_VIDEO';
const SEARCH_VIDEO_SUCCESS = 'SEARCH_VIDEO_SUCCESS';
const SEARCH_VIDEO_FAILURE = 'SEARCH_VIDEO_FAILURE';

const initialState = {
  videos: [],
  nextPageToken: null,
  loading: false,
  error: null,
};

// Create Redux action creators that return an action
const clearPlaylist = () => ({
  type: CLEAR_PLAYLIST,
});

const getVideo = () => ({
  type: SEARCH_VIDEO,
});

const getVideoSuccess = payload => ({
  type: SEARCH_VIDEO_SUCCESS,
  payload,
});

const getVideoFailure = error => ({
  type: SEARCH_VIDEO_FAILURE,
  payload: error,
});

// Combine them all in an asynchronous thunk
export function resetPlaylist () {
  return dispatch => {
    dispatch(clearPlaylist());
  };
}
export function fetchVideo ({ searchTerm, nextPageToken = null }) {
  return async dispatch => {
    dispatch(getVideo());

    try {
      const API_KEY = process.env.API_KEY;
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          type: 'video',
          pageToken: nextPageToken,
          q: searchTerm,
          maxResults: 10,
          key: API_KEY,
        },
      });

      dispatch(getVideoSuccess({
        items: response.data.items,
        nextPageToken: response.data.nextPageToken,
      }));
    } catch (error) {
      console.warn(error);
      dispatch(getVideoFailure(error));
    }
  };
}

// reducers
export default function ytVideosReducer (state = initialState, action) {
  switch (action.type) {
    case CLEAR_PLAYLIST:
      return initialState;
    case SEARCH_VIDEO:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_VIDEO_SUCCESS:
      return {
        ...state,
        videos: [...state.videos, ...action.payload.items],
        nextPageToken: action.payload.nextPageToken,
        loading: false,
        error: null,
      };
    case SEARCH_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
