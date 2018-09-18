import { FETCH_SHOWS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SHOWS:
      return action.payload.data.shows;
    default:
      return state;
  }
}
