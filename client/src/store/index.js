import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './login.js';
import searchSlice from './search.js';

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;
