import * as actionTypes from './worksYtActionTypes';
import { fetchYtVideo } from '../../../apis/worksYt/videos';

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
      const response = await fetchYtVideo({
        nextPageToken,
        searchTerm,
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
