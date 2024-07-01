import type { SerializedError } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchOverviewDetail } from '@src/apis/resume/overview';

export interface OverViewProps {
  title: string;
  subtitle: string;
  body: string[];
  skills: string[];
}


const initialState: {
  overview: OverViewProps;
  loading: boolean;
  error: SerializedError | null
} = {
  overview: {
    title: '',
    subtitle: '',
    body: [],
    skills: [],
  },
  loading: false,
  error: null,
};

export const getOverview = createAsyncThunk('overview/getOverview', async () => {
  const response = await fetchOverviewDetail();
  return response;
})

const overviewSlice = createSlice({
  name: 'overview',
  initialState,
  reducers: {
    // any additional "normal" case reducers here.
    // these will generate new action creators
  },
  extraReducers: builder => {
    // Use `extraReducers` to handle actions that were generated
    // _outside_ of the slice, such as thunks or in other slices
    builder
      .addCase(getOverview.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOverview.fulfilled, (state, action) => {
        state.overview = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getOverview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
  }
})

export default overviewSlice.reducer;
