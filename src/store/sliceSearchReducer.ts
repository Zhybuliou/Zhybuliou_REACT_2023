import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: '',
  },
  reducers: {
    addSearch(state, action) {
      const theElement = state;
      theElement.search = action.payload.search;
    },
  },
});

export const { addSearch } = searchSlice.actions;
export default searchSlice.reducer;
