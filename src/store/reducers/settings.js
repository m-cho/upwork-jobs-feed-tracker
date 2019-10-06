const defaultStore = {
  fetchingInterval: 1,
  darkMode: true
};

export const SETTINGS_SET_DARK_MODE = 'SETTINGS_SET_DARK_MODE';
export const SETTINGS_SET_FETCHING_INTERVAL = 'SETTINGS_SET_FETCHING_INTERVAL';

export default (state = defaultStore, action) => {
  switch (action.type) {
    case SETTINGS_SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload
      };
    case SETTINGS_SET_FETCHING_INTERVAL:
      return {
        ...state,
        fetchingInterval: action.payload
      };
    default:
      return state;
  }
};

export const sGetSettings = state => state.settings;

export const sGetFetchingInterval = state =>
  sGetSettings(state).fetchingInterval;

export const sGetDarkMode = state =>
  sGetSettings(state).darkMode;
