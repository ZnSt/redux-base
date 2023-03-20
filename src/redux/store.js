import { configureStore, createSlice } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';

const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 100,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

export const { increment, decrement } = myValueSlice.actions;

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    user: userSlice.reducer,
  },
});
