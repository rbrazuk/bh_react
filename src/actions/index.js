import axios from 'axios';

export const FETCH_SHOWS = 'fetch_shows';
export const FETCH_RELEASES = 'fetch_releases';

const BASE_URL = 'https://safe-crag-83796.herokuapp.com/api/v1'

export function fetchShows() {
  const request = axios.get(`${BASE_URL}/shows`);
  return {
    type: FETCH_SHOWS,
    payload: request
  };
}

export function fetchReleases() {
  const request = axios.get(`${BASE_URL}/releases`);
  return {
    type: FETCH_RELEASES,
    payload: request
  };
}
