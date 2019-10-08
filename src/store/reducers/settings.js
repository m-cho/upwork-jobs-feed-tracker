const defaultStore = {
  darkMode: false,
  soundEnabled: true,
  fetchingInterval: 1,
  fetchingEnabled: true,
};

export const SETTINGS_UPDATE = 'SETTINGS_UPDATE';

export default (state = defaultStore, action) => {
  switch (action.type) {
    case SETTINGS_UPDATE:
      return {
        ...state,
        ...action.payload
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
