/**
 * Load state from storage
 * @returns {undefined}
 */
import { globalStateKey } from '../globals';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(globalStateKey);

    return serializedState
      ? JSON.parse(serializedState)
      : undefined;
  } catch (err) {
    return undefined;
  }
};

/**
 * Save state into storage
 * @param state
 */
export const saveState = state => {
  try {
    localStorage.setItem(globalStateKey, JSON.stringify(state));
  } catch (err) {
    // ignore
  }
};
