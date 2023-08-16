import { createSlice } from '@reduxjs/toolkit';

const initialLoginState = { loginState: false };

const loginSlice = createSlice({
  name: 'login',
  initialState: initialLoginState,
  reducers: {
    login: (state) => {
      state.loginState = true;
    },
    logout: (state) => {
      state.loginState = false;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
