import { combineReducers } from 'redux';
import ShowsReducer from './reducer_shows';
import ReleasesReducer from './reducer_releases';

const rootReducer = combineReducers({
  shows: ShowsReducer,
  releases: ReleasesReducer
});

export default rootReducer;
