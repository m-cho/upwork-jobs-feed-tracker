const defaultStore = [];
const maxJobsToStore = 10;
const suggestedKey = '__suggested';
const seenKey = '__seen';

export const JOBS_SET = 'JOBS_SET';
export const JOBS_ADD = 'JOBS_ADD';
export const JOBS_SET_SUGGESTED = 'JOBS_SET_SUGGESTED';

const mergeJobs = ({
  oldJobs,
  newJobs
}) => {
  const oldJobsIds = oldJobs.map(job => job.uid);
  const alreadyExists = job => oldJobsIds.includes(job.uid);
  const jobsToAdd = newJobs.filter(job => !alreadyExists(job));

  return [
    ...oldJobs,
    ...jobsToAdd
  ];
};

const markAsSuggested = job => ({
  ...job,
  [suggestedKey]: true
});

export default (state = defaultStore, action) => {
  switch (action.type) {
    case JOBS_ADD:
      return mergeJobs({
        oldJobs: state,
        newJobs: action.payload
      })
        .slice(0, maxJobsToStore);
    case JOBS_SET_SUGGESTED:
      return state.map(markAsSuggested);
    case JOBS_SET:
      return action.payload;
    default:
      return state;
  }
};

export const sGetJobs = state => state.jobs;

export const sGetUnsuggestedJobs = state =>
  sGetJobs(state).filter(job => !job[suggestedKey]);

export const sGetUnseenJobs = state =>
  sGetJobs(state).filter(job => !job[seenKey]);
