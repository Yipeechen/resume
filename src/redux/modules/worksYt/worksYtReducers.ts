import { createSlice } from '@reduxjs/toolkit'

// https://developers.google.com/youtube/v3/docs/videos?hl=zh-tw#resource
export interface VideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: {
      medium: {
        url: string;
      }
    }
  }
  [key: string]: any;
}

const initialState: {
  videos: VideoItem[];
  nextPageToken: string | null;
  loading: boolean;
  error: any;
} = {
  videos: [],
  nextPageToken: null,
  loading: false,
  error: null,
};

const ytSlice = createSlice({
  name: 'yt',
  initialState,
  reducers: {
    clearPlaylistRequest(state) {
      state = initialState;
    },
    fetchPopularVideoRequest(state) {
      state.loading = true;
    },
    fetchPopularVideoSuccess(state, action) {
      state.videos = [...state.videos, ...action.payload.items];
      state.nextPageToken = action.payload.nextPageToken;
      state.loading = false;
      state.error = null;
    },
    fetchPopularVideoFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    getVideoRequest(state) {
      state.loading = true;
    },
    getVideoSuccess(state, action) {
      state.videos = [...state.videos, ...action.payload.items];
      state.nextPageToken = action.payload.nextPageToken;
      state.loading = false;
      state.error = null;
    },
    getVideoFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  clearPlaylistRequest,
  fetchPopularVideoRequest,
  fetchPopularVideoSuccess,
  fetchPopularVideoFailure,
  getVideoRequest,
  getVideoSuccess,
  getVideoFailure
} = ytSlice.actions;
export default ytSlice.reducer;
