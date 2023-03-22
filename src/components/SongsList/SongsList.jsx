import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as songsOperations from '../../redux/songs/songsOperations';

export const SongsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(songsOperations.getSongs());
  }, [dispatch]);

  return <div></div>;
};
