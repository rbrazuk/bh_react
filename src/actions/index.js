import axios from 'axios';

export const FETCH_SHOWS = 'fetch_shows';
export const FETCH_RELEASES = 'fetch_releases';

const SHOWS_URL = 'https://raw.githubusercontent.com/rbrazuk/bhltd_temp/master/js/shows.json';
const DUMMY_BASE_URL = 'http://localhost:5000/api/v1';

export function fetchShows() {
  const request = axios.get(`${DUMMY_BASE_URL}/shows`);
  return {
    type: FETCH_SHOWS,
    payload: request
  };
}

export function fetchReleases() {
  const request = axios.get(`${DUMMY_BASE_URL}/releases`);
  return {
    type: FETCH_RELEASES,
    payload: request
  };
}
