import { createSlice } from '@reduxjs/toolkit'

export interface OverViewProps {
  title: string;
  subtitle: string;
  body: string[];
  skills: string[];
}


const initialState: {
  overview: OverViewProps;
  loading: boolean;
  error: any;
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

const overviewSlice = createSlice({
  name: 'overview',
  initialState,
  reducers: {
    getOverviewDetailRequest(state) {
      state.loading = true;
    },
    getOverviewDetailSuccess(state, action) {
      state.overview = { ...state.overview, ...action.payload.overview };
      state.loading = false;
      state.error = null;
    },
    getOverviewDetailFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
})

export const { getOverviewDetailRequest, getOverviewDetailSuccess, getOverviewDetailFailure } = overviewSlice.actions
export default overviewSlice.reducer;
