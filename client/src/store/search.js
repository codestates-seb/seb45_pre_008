import { createSlice } from '@reduxjs/toolkit';

const initialSearchState = { searchValue: '' };

const searchSlice = createSlice({
  name: 'searchReducer',
  initialState: initialSearchState,
  reducers: {
    search: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { search } = searchSlice.actions;

export default searchSlice;
