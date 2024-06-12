import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import { ActionTypes } from './worksYtActionTypes';
import type { VideoItem } from './worksYtReducers';
import { fetchYtVideo, fetchMostPopularYtVideo } from '../../../apis/worksYt/videos';


interface ApiResponse {
  items: VideoItem[];
  nextPageToken: string | null;
}
interface ApiError {
  message: string;
  [key: string]: any;
}

const clearPlaylist = () => ({
  type: ActionTypes.CLEAR_PLAYLIST,
});

const fetchPopularVideo = () => ({
  type: ActionTypes.FETCH_POPULAR_VIDEO,
});

const fetchPopularVideoSuccess = (payload: ApiResponse) => ({
  type: ActionTypes.FETCH_POPULAR_VIDEO_SUCCESS,
  payload,
});

const fetchPopularVideoFailure = (error: ApiError) => ({
  type: ActionTypes.FETCH_POPULAR_VIDEO_FAILURE,
  payload: error,
});
const getVideo = () => ({
  type: ActionTypes.SEARCH_VIDEO,
});

const getVideoSuccess = (payload: ApiResponse) => ({
  type: ActionTypes.SEARCH_VIDEO_SUCCESS,
  payload,
});

const getVideoFailure = (error: ApiError) => ({
  type: ActionTypes.SEARCH_VIDEO_FAILURE,
  payload: error,
});

export function resetPlaylist () {
  return (dispatch: Dispatch) => {
    dispatch(clearPlaylist());
  };
}
export function fetchMostPopularVideo ({ nextPageToken = null }: { nextPageToken?: string | null }) {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPopularVideo());

    try {
      const response = await fetchMostPopularYtVideo({
        nextPageToken,
      }) as AxiosResponse & ApiResponse;

      dispatch(fetchPopularVideoSuccess({
        items: response.items,
        nextPageToken: response.nextPageToken,
      }));
    } catch (error: any) {
      console.warn(error);
      dispatch(fetchPopularVideoFailure(error));
    }
  };
}
export function fetchVideo ({ searchTerm, nextPageToken = null }: { searchTerm: string, nextPageToken?: string | null }) {
  return async (dispatch: Dispatch) => {
    dispatch(getVideo());

    try {
      const response = await fetchYtVideo({
        nextPageToken,
        searchTerm,
      }) as AxiosResponse & ApiResponse;

      dispatch(getVideoSuccess({
        items: response.items,
        nextPageToken: response.nextPageToken,
      }));
    } catch (error: any) {
      console.warn(error);
      dispatch(getVideoFailure(error));
    }
  };
}
