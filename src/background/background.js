import store from '../store';
import {
  onAlarm,
  createAlarm,
  setBadgeText,
  setBadgeColor,
  clearNotifications,
  onNotificationClick
} from '../utils/chrome';
import { getProjects } from '../api';
import { showNotification } from './utils';
import { openOptionsPage } from '../utils';
import { acAuthSet } from '../store/actions/auth';
import { sGetAuth } from '../store/reducers/auth';
import { sGetBadgeText } from '../store/selectors';
import { badgeColor, jobsAlarmKey } from '../globals';
import { sGetFetchingInterval } from '../store/reducers/settings';
import { sGetUnsuggestedProjects } from '../store/reducers/projects';
import { acProjectsAdd, acProjectsSetSuggested } from '../store/actions/projects';

const getState = () => store.getState();
// wrap in functions to ensure we always have the latest state
const isAuthenticated = () => sGetAuth(getState());
const fetchingInterval = () => sGetFetchingInterval(getState());
const unsuggestedProjects = () => sGetUnsuggestedProjects(getState());

const fetchProjects = async () => {
  const [error, projects] = await getProjects();

  if (error) {
    store.dispatch(acAuthSet(false));
  } else {
    store.dispatch(acAuthSet(true)); // if previous request failed
    store.dispatch(acProjectsAdd(projects));

    if (unsuggestedProjects().length > 0) {
      clearNotifications();
      showNotification(getState());
      store.dispatch(acProjectsSetSuggested());
    }
  }

  setBadgeText(sGetBadgeText(getState()));
};

const initialize = () => {
  setBadgeColor(badgeColor);
  setBadgeText(sGetBadgeText(getState()));

  if (isAuthenticated()) {
    createAlarm(jobsAlarmKey, fetchingInterval());
    fetchProjects();
  }

  onAlarm(jobsAlarmKey, fetchProjects);

  onNotificationClick(() => {
    openOptionsPage();
    clearNotifications();
  });
};

initialize();
