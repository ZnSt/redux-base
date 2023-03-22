import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7777';

export const fetchSongs = async () => {
  try {
    console.log('Fetching songs...');
    const { data } = await axios.get('/songs');
    console.log('Fetched songs:', data);
    return data;
  } catch (error) {
    console.log('Error fetching songs:', error);
  }
};

export const fetchSongsById = async songId => {
  const { data } = await axios.get(`/songs/${songId}`);
  return data;
};
