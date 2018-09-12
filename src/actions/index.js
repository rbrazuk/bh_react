import axios from 'axios';

export const FETCH_SHOWS = 'fetch_shows';

const SHOWS_URL = 'https://raw.githubusercontent.com/rbrazuk/bhltd_temp/master/js/shows.json';

export function fetchShows() {
  const request = axios.get(SHOWS_URL);

  return {
    type: FETCH_SHOWS,
    payload: request
  };
}
