import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import type { VideoItem } from '@src/redux/modules/worksYt/worksYtReducers';
import { fetchYtVideo, fetchMostPopularYtVideo } from '@src/apis/worksYt/videos';
import { clearPlaylistRequest, fetchPopularVideoRequest, fetchPopularVideoSuccess, fetchPopularVideoFailure, getVideoRequest, getVideoSuccess, getVideoFailure } from '@src/redux/modules/worksYt/worksYtReducers';

interface ApiResponse {
  items: VideoItem[];
  nextPageToken: string | null;
}

export function resetPlaylist () {
  return (dispatch: Dispatch) => {
    dispatch(clearPlaylistRequest());
  };
}
export function fetchMostPopularVideo ({ nextPageToken = null }: { nextPageToken?: string | null }) {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPopularVideoRequest());

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
    dispatch(getVideoRequest());

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
