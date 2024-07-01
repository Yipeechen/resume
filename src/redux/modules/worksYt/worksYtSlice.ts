import type { SerializedError } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchMostPopularYtVideo, fetchYtVideo } from '@src/apis/worksYt/videos';

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
  error: SerializedError | null,
} = {
  videos: [],
  nextPageToken: null,
  loading: false,
  error: null,
};

export const fetchMostPopularVideo = createAsyncThunk('yt/fetchMostPopularVideo', async ({ nextPageToken = null }: { nextPageToken?: string | null }) => {
  const response = await fetchMostPopularYtVideo({
    nextPageToken,
  });
  return response;
});
export const fetchVideo = createAsyncThunk('yt/fetchVideo', async ({ searchTerm, nextPageToken = null }: { searchTerm: string, nextPageToken?: string | null }) => {
  const response = await fetchYtVideo({
    nextPageToken,
    searchTerm,
  });
  return response;
});


const ytSlice = createSlice({
  name: 'yt',
  initialState,
  reducers: {
    // any additional "normal" case reducers here.
    // these will generate new action creators
    clearPlaylist(state) {
      state.videos = [];
      state.loading = false;
      state.nextPageToken = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    // Use `extraReducers` to handle actions that were generated
    // _outside_ of the slice, such as thunks or in other slices
    builder
      .addCase(fetchMostPopularVideo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMostPopularVideo.fulfilled, (state, action) => {
        state.videos = [...state.videos, ...action.payload.items];
        state.nextPageToken = action.payload.nextPageToken;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchMostPopularVideo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(fetchVideo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.videos = [...state.videos, ...action.payload.items];
        state.nextPageToken = action.payload.nextPageToken;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
  }
});

export const { clearPlaylist } = ytSlice.actions;
export default ytSlice.reducer;
