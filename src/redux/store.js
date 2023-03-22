import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './songs/songsReducer';

export const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
});
