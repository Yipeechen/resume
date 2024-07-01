import { createSlice } from '@reduxjs/toolkit'

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
  error: any;
} = {
  events: [],
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    getAllEventsRequest(state) {
      state.loading = true
    },
    getAllEventsSuccess(state, action) {
      state.events = [...state.events, ...action.payload.events];
      state.loading = false;
      state.error = null;
    },
    getAllEventsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  }
})

export const { getAllEventsRequest, getAllEventsSuccess, getAllEventsFailure } = eventsSlice.actions;
export default eventsSlice.reducer;
