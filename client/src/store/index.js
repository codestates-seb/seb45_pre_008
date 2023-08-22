import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './search.js';
import userReducer from './userSlice';
import loginReducer from './login';

const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    search: searchSlice.reducer,
  },
});

export default store;
