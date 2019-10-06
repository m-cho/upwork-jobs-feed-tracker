import {
  PROJECTS_ADD,
  PROJECTS_SET,
  PROJECTS_SET_SUGGESTED
} from '../reducers/projects';

export const acProjectsAdd = projects => ({
  type: PROJECTS_ADD,
  payload: projects
});

export const acProjectsSet = projects => ({
  type: PROJECTS_SET,
  payload: projects
});

export const acProjectsSetSuggested = () => ({ type: PROJECTS_SET_SUGGESTED });
