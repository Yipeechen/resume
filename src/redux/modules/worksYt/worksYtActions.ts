import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import { createRequestedActions } from '@src/redux/modules/actionFactory';
import type { VideoItem } from '@src/redux/modules/worksYt/worksYtReducers';
import { fetchYtVideo, fetchMostPopularYtVideo } from '@src/apis/worksYt/videos';

enum ActionTypes {
  CLEAR_PLAYLIST = 'CLEAR_PLAYLIST',
  FETCH_POPULAR_VIDEO = 'FETCH_POPULAR_VIDEO',
  SEARCH_VIDEO = 'SEARCH_VIDEO',
};

const { types: definedTypes, actions } = createRequestedActions(Object.values(ActionTypes));

export const types = definedTypes;

interface ApiResponse {
  items: VideoItem[];
  nextPageToken: string | null;
}
interface ApiError {
  message: string;
  [key: string]: any;
}

export function resetPlaylist () {
  return (dispatch: Dispatch) => {
    dispatch(actions.clearPlaylistRequest());
  };
}
export function fetchMostPopularVideo ({ nextPageToken = null }: { nextPageToken?: string | null }) {
  return async (dispatch: Dispatch) => {
    dispatch(actions.fetchPopularVideoRequest());

    try {
      const response = await fetchMostPopularYtVideo({
        nextPageToken,
      }) as AxiosResponse & ApiResponse;

      dispatch(actions.fetchPopularVideoSuccess({
        items: response.items,
        nextPageToken: response.nextPageToken,
      }));
    } catch (error: any) {
      console.warn(error);
      dispatch(actions.fetchPopularVideoFailure(error));
    }
  };
}
export function fetchVideo ({ searchTerm, nextPageToken = null }: { searchTerm: string, nextPageToken?: string | null }) {
  return async (dispatch: Dispatch) => {
    dispatch(actions.getVideoRequest());

    try {
      const response = await fetchYtVideo({
        nextPageToken,
        searchTerm,
      }) as AxiosResponse & ApiResponse;

      dispatch(actions.getVideoSuccess({
        items: response.items,
        nextPageToken: response.nextPageToken,
      }));
    } catch (error: any) {
      console.warn(error);
      dispatch(actions.getVideoFailure(error));
    }
  };
}
