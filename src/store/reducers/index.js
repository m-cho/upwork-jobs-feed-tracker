import { combineReducers } from 'redux';
import auth from './auth';
import settings from './settings';
import projects from './projects';

const rootReducer = combineReducers({
  auth,
  settings,
  projects
});

export default rootReducer;
