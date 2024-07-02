import type { SerializedError } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchEvents } from '@src/apis/resume/events';

interface ContentProps {
  heading: string;
  isHighlight?: boolean;
  body: string;
  skills: string[]
}

export interface EventProps {
  content?: ContentProps[];
  isMainEvent?: boolean;
  period: string;
  subTitle: string;
  title: string;
}

const initialState: {
  events: EventProps[];
  loading: boolean;
  error: SerializedError | null
} = {
  events: [],
  loading: false,
  error: null,
};

export const getEvents = createAsyncThunk('events/getEvents', async () => {
  const response = await fetchEvents();
  return response;
})

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    // any additional "normal" case reducers here.
    // these will generate new action creators
  },
  extraReducers: builder => {
    // Use `extraReducers` to handle actions that were generated
    // _outside_ of the slice, such as thunks or in other slices
    builder
      .addCase(getEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.events = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
  }
})

export default eventsSlice.reducer;
