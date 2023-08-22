import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import loginReducer from './login';

const store = configureStore({
  reducer: { user: userReducer, login: loginReducer },
});

export default store;
