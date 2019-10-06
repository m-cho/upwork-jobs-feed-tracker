const defaultStore = [];
const maxProjectsToStore = 10;
const suggestedKey = '__suggested';
const seenKey = '__seen';

export const PROJECTS_SET = 'PROJECTS_SET';
export const PROJECTS_ADD = 'PROJECTS_ADD';
export const PROJECTS_SET_SUGGESTED = 'PROJECTS_SET_SUGGESTED';

const mergeProjects = ({
  oldProjects,
  newProjects
}) => {
  const oldProjectsIds = oldProjects.map(project => project.uid);
  const alreadyExists = project => oldProjectsIds.includes(project.uid);
  const projectsToAdd = newProjects.filter(project => !alreadyExists(project));

  return [
    ...oldProjects,
    ...projectsToAdd
  ];
};

const markAsSuggested = project => ({
  ...project,
  [suggestedKey]: true
});

export default (state = defaultStore, action) => {
  switch (action.type) {
    case PROJECTS_ADD:
      return mergeProjects({
        oldProjects: state,
        newProjects: action.payload
      })
        .slice(0, maxProjectsToStore);
    case PROJECTS_SET_SUGGESTED:
      return state.map(markAsSuggested);
    case PROJECTS_SET:
      return action.payload;
    default:
      return state;
  }
};

export const sGetProjects = state => state.projects;

export const sGetUnsuggestedProjects = state =>
  sGetProjects(state).filter(project => !project[suggestedKey]);

export const sGetUnseenProjects = state =>
  sGetProjects(state).filter(project => !project[seenKey]);
