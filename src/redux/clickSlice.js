import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const NAME = 'clicks';

const initialState = {
  value: 0,
};

const clickSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    update(state, action) {
      state.value += action.payload;
    },
  },
});

const persistConfig = {
  key: 'clicks',
  storage,
  whiteList: ['value'],
};

export const clicksReducer = persistReducer(persistConfig, clickSlice.reducer);

export const { update } = clickSlice.actions;

export const getValue = state => state.clicks.value;
