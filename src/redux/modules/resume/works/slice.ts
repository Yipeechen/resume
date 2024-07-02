import type { SerializedError } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWorks } from '@src/apis/resume/works';

export interface Work {
  title: string;
  tool: string;
  link: string;
  img: {
    pc: string;
    mobile: string;
  }
}

const initialState: {
  works: Work[],
  loading: boolean,
  error: SerializedError | null,
} = {
  works: [],
  loading: false,
  error: null,
}

export const getWorks = createAsyncThunk('works/getWorks', async () => {
  const response = await fetchWorks();
  return response;
})

const worksSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {
    // any additional "normal" case reducers here.
    // these will generate new action creators
  },
  extraReducers: builder => {
    // Use `extraReducers` to handle actions that were generated
    // _outside_ of the slice, such as thunks or in other slices
    builder
      .addCase(getWorks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWorks.fulfilled, (state, action) => {
        state.works = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getWorks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
  }
});

export default worksSlice.reducer;
