import { createNotification } from '../utils/chrome';
import { sGetUnseenJobs } from '../store/reducers/jobs';
import { sGetAuth } from '../store/reducers/auth';

export const showNotification = state => {
  const isAuthenticated = sGetAuth(state);
  const unseenJobs = sGetUnseenJobs(state);

  return !isAuthenticated
    ? null
    : unseenJobs.length &&
      createNotification({
        title: unseenJobs.length === 1
          ? 'New job has just been posted! 🔥🔥🔥'
          : `${unseenJobs.length} new jobs have been posted 🙌`,
        message: 'Be first to apply! 👊'
      });
};
