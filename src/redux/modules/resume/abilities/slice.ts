import type { SerializedError } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchAbilities } from '@src/apis/resume/abilities';

interface Ability {
  icon: string;
  title: string;
  list: string[];
}

const initialState: {
  abilities: Ability[],
  loading: boolean,
  error: SerializedError | null
} = {
  abilities: [],
  loading: false,
  error: null,
}

export const getAbilities = createAsyncThunk('abilities/getAbilities', async () => {
  const response = await fetchAbilities();
  return response;
})

const abilitiesSlice = createSlice({
  name: 'abilities',
  initialState,
  reducers: {
    // any additional "normal" case reducers here.
    // these will generate new action creators
  },
  extraReducers: builder => {
    // Use `extraReducers` to handle actions that were generated
    // _outside_ of the slice, such as thunks or in other slices
    builder
      .addCase(getAbilities.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAbilities.fulfilled, (state, action) => {
        state.abilities = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAbilities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
  }
});

export default abilitiesSlice.reducer;