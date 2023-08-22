import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedin: false,
  },
  reducers: {
    loginUserSuccess: (state) => {
      state.isLoggedin = true;
    },
    logoutUser: (state) => {
      state.isLoggedin = false;
    },
  },
});

export default loginSlice.reducer;

export const loginActions = loginSlice.actions;
