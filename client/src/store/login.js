import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {},
  reducers: {
    loginUserSuccess: (state, action) => {
      state.loginSuccess = action.payload;
    },
  },
});

export default loginSlice.reducer;
