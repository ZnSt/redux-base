import { createAction } from '@reduxjs/toolkit';
// pending
export const fetchSongsRequest = createAction('songs/fetchSongsRequest');
// filfilled
export const fetchSongsSuccess = createAction('songs/fetchSongsSuccess');
// rejected
export const fetchSongsError = createAction('songs/fetchSongsError');
