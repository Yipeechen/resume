import axios from 'axios';

// Create Redux action types
const SEARCH_VIDEO = 'SEARCH_VIDEO';
const SEARCH_VIDEO_SUCCESS = 'SEARCH_VIDEO_SUCCESS';
const SEARCH_VIDEO_FAILURE = 'SEARCH_VIDEO_FAILURE';

const initialState = {
  videos: [],
  loading: false,
  error: null,
};

// Create Redux action creators that return an action
const getVideo = () => ({
  type: SEARCH_VIDEO,
});

const getVideoSuccess = videos => ({
  type: SEARCH_VIDEO_SUCCESS,
  payload: videos,
});

const getVideoFailure = error => ({
  type: SEARCH_VIDEO_FAILURE,
  payload: error,
});

// Combine them all in an asynchronous thunk
export function fetchVideo (term) {
  return async dispatch => {
    dispatch(getVideo());

    try {
      const API_KEY = process.env.API_KEY;
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          type: 'video',
          // pageToken: 'CAoQAA', // from api response
          q: term,
          maxResults: 10,
          key: API_KEY,
        },
      });

      dispatch(getVideoSuccess(response.data.items));
    } catch (error) {
      console.warn(error);
      dispatch(getVideoFailure(error));
    }
  };
}

// reducers
export default function ytVideosReducer (state = initialState, action) {
  switch (action.type) {
    case SEARCH_VIDEO:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_VIDEO_SUCCESS:
      return {
        ...state,
        videos: action.payload,
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
