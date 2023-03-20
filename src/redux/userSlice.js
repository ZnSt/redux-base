import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: '',
    isLoggerIn: false,
  },
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggerIn = true;
    },
    logOut(state) {
      state.login = '';
      state.isLoggerIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
