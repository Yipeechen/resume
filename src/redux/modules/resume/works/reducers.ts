import { createSlice } from '@reduxjs/toolkit'

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
  error: any,
} = {
  works: [],
  loading: false,
  error: null,
}

const worksSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {
    getAllWorksRequest(state) {
      state.loading = true;
    },
    getAllWorksSuccess(state, action) {
      state.works = [...state.works, ...action.payload.works];
      state.loading = false;
      state.error = null;
    },
    getAllWorksFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { getAllWorksRequest, getAllWorksSuccess, getAllWorksFailure } = worksSlice.actions;
export default worksSlice.reducer;
