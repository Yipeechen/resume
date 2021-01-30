import axios from 'axios';
import * as actionTypes from './worksYtActionTypes';

const clearPlaylist = () => ({
  type: actionTypes.CLEAR_PLAYLIST,
});

const getVideo = () => ({
  type: actionTypes.SEARCH_VIDEO,
});

const getVideoSuccess = payload => ({
  type: actionTypes.SEARCH_VIDEO_SUCCESS,
  payload,
});

const getVideoFailure = error => ({
  type: actionTypes.SEARCH_VIDEO_FAILURE,
  payload: error,
});

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
