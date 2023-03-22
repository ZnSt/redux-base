import * as songsActions from './songsAction';
import * as songsApi from '../../api/songs-api';

// export const getSongs = () => async dispatch => {
//   dispatch(songsActions.fetchSongsRequest());

//   try {
//     const songs = await songsApi.fetchSongs();
//     console.log(songs);
//     dispatch(songsActions.fetchSongsSuccess(songs));
//   } catch (error) {
//     dispatch(songsActions.fetchSongsError(error.message));
//   }
// };

export const getSongs = () => async dispatch => {
  dispatch(songsActions.fetchSongsRequest());

  try {
    const songs = await songsApi.fetchSongs();
    console.log(songs);
    dispatch(songsActions.fetchSongsSuccess(songs));
  } catch (error) {
    console.error(error); // добавляем обработку ошибок
    dispatch(songsActions.fetchSongsError(error.message));
  }
};
