export const stateKey = 'STATE';

/**
 * Load state from storage
 * @returns {undefined}
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(stateKey);

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
export const saveState = (state) => {
  try {
    localStorage.setItem(stateKey, JSON.stringify(state));
  } catch (err) {
    // ignore
  }
};
