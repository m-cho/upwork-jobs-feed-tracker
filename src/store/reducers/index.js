import { combineReducers } from 'redux';
import settings from './settings';
import projects from './projects';

const rootReducer = combineReducers({
  settings,
  projects,
});

export default rootReducer;
