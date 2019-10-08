import { SETTINGS_UPDATE } from '../reducers/settings';

export const acSettingsUpdate = settings => ({
  type: SETTINGS_UPDATE,
  payload: settings
});
