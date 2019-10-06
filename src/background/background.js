import store from '../store';
import {
  onAlarm,
  createAlarm,
  setBadgeText,
  setBadgeColor,
  clearNotifications,
  onNotificationClick
} from '../utils/chrome';
import { getJobs } from '../api';
import { showNotification } from './utils';
import { openOptionsPage } from '../utils';
import { acAuthSet } from '../store/actions/auth';
import { sGetAuth } from '../store/reducers/auth';
import { sGetBadgeText } from '../store/selectors';
import { badgeColor, jobsAlarmKey } from '../globals';
import { sGetUnsuggestedJobs } from '../store/reducers/jobs';
import { sGetFetchingInterval } from '../store/reducers/settings';
import { acJobsAdd, acJobsSetSuggested } from '../store/actions/jobs';

const getState = () => store.getState();
// wrap in functions to ensure we always have the latest state
const isAuthenticated = () => sGetAuth(getState());
const fetchingInterval = () => sGetFetchingInterval(getState());
const unsuggestedJobs = () => sGetUnsuggestedJobs(getState());

const fetchJobs = async () => {
  const [error, jobs] = await getJobs();

  if (error) {
    store.dispatch(acAuthSet(false));
  } else {
    store.dispatch(acAuthSet(true)); // if previous request failed
    store.dispatch(acJobsAdd(jobs));

    if (unsuggestedJobs().length > 0) {
      clearNotifications();
      showNotification(getState());
      store.dispatch(acJobsSetSuggested());
    }
  }

  setBadgeText(sGetBadgeText(getState()));
};

const initialize = () => {
  setBadgeColor(badgeColor);
  setBadgeText(sGetBadgeText(getState()));

  if (isAuthenticated()) {
    createAlarm(jobsAlarmKey, fetchingInterval());
    fetchJobs();
  }

  onAlarm(jobsAlarmKey, fetchJobs);

  onNotificationClick(() => {
    openOptionsPage();
    clearNotifications();
  });
};

initialize();
