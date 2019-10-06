import { sGetAuth } from './reducers/auth';
import { sGetUnseenJobs } from './reducers/jobs';

export const sGetBadgeText = state =>
  sGetAuth(state)
    ? sGetUnseenJobs(state).length
    : 'err';
