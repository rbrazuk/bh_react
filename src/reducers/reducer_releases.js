import { FETCH_RELEASES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_RELEASES:
      return action.payload.data.releases;
    default:
      return state;
  }
}

// export default function(state = {}, action) {
//   switch (action.type) {
//     case FETCH_SHOWS:
//       return action.payload.data.shows;
//     default:
//       return state;
//   }
// }
