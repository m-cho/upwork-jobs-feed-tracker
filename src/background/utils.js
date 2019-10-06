import { createNotification } from '../utils/chrome';
import { sGetUnseenProjects } from '../store/reducers/projects';
import { sGetAuth } from '../store/reducers/auth';

export const showNotification = state => {
  const isAuthenticated = sGetAuth(state);
  const unseenProjects = sGetUnseenProjects(state);

  return !isAuthenticated
    ? null
    : unseenProjects.length &&
      createNotification({
        title: unseenProjects.length === 1
          ? 'New project has just been posted! 🔥🔥🔥'
          : `${unseenProjects.length} new projects have been posted 🙌`,
        message: 'Be first to apply! 👊'
      });
};
