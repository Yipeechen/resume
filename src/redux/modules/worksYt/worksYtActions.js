import * as actionTypes from './worksYtActionTypes';
import { fetchYtVideo, fetchMostPopularYtVideo } from '../../../apis/worksYt/videos';

const clearPlaylist = () => ({
  type: actionTypes.CLEAR_PLAYLIST,
});

const fetchPopularVideo = () => ({
  type: actionTypes.FETCH_POPULAR_VIDEO,
});

const fetchPopularVideoSuccess = payload => ({
  type: actionTypes.FETCH_POPULAR_VIDEO_SUCCESS,
  payload,
});

const fetchPopularVideoFailure = error => ({
  type: actionTypes.FETCH_POPULAR_VIDEO_FAILURE,
  payload: error,
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
export function fetchMostPopularVideo ({ nextPageToken = null }) {
  return async dispatch => {
    dispatch(fetchPopularVideo());

    try {
      const response = await fetchMostPopularYtVideo({
        nextPageToken,
      });

      dispatch(fetchPopularVideoSuccess({
        items: response.items,
        nextPageToken: response.nextPageToken,
      }));
    } catch (error) {
      console.warn(error);
      dispatch(fetchPopularVideoFailure(error));
    }
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
        items: response.items,
        nextPageToken: response.nextPageToken,
      }));
    } catch (error) {
      console.warn(error);
      dispatch(getVideoFailure(error));
    }
  };
}
