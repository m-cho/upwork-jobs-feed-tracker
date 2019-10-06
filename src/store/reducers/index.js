import { combineReducers } from 'redux';
import auth from './auth';
import settings from './settings';
import jobs from './jobs';

const rootReducer = combineReducers({
  auth,
  settings,
  jobs
});

export default rootReducer;
