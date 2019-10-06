import { sGetAuth } from './reducers/auth';
import { sGetUnseenProjects } from './reducers/projects';

export const sGetBadgeText = state =>
  sGetAuth(state)
    ? sGetUnseenProjects(state).length
    : 'err';
