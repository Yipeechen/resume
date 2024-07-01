import { createSlice } from '@reduxjs/toolkit';

interface Ability {
  icon: string;
  title: string;
  list: string[];
}

const initialState: {
  abilities: Ability[],
  loading: boolean,
  error: Error | null
} = {
  abilities: [],
  loading: false,
  error: null,
}

const abilitiesSlice = createSlice({
  name: 'abilities',
  initialState,
  reducers: {
    getAbilitiesRequest(state) {
      state.loading = true;
    },
    getAbilitiesSuccess(state, action) {
      state.abilities = [...state.abilities, ...action.payload.abilities];
      state.loading = false;
      state.error = null;
    },
    getAbilitiesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { getAbilitiesRequest, getAbilitiesSuccess, getAbilitiesFailure } = abilitiesSlice.actions;
export default abilitiesSlice.reducer;