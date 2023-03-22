import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as songsActions from './songsAction';

const entities = createReducer([], {
  [songsActions.fetchSongsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [songsActions.fetchSongsRequest]: () => true,
  [songsActions.fetchSongsSuccess]: () => false,
  [songsActions.fetchSongsError]: () => false,
});

const error = createReducer(null, {
  [songsActions.fetchSongsError]: (_, action) => action.payload,
  [songsActions.fetchSongsRequest]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
