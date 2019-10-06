const defaultStore = { fetchingInterval: 1 };

export const SETTINGS_SET_FETCHING_INTERVAL = 'SETTINGS_SET_FETCHING_INTERVAL';

export default (state = defaultStore, action) => {
  switch (action.type) {
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
