const defaultStore = true;

export const AUTH_SET = 'AUTH_SET';

export default (state = defaultStore, action) => {
  switch (action.type) {
    case AUTH_SET:
      return action.payload;
    default:
      return state;
  }
};

export const sGetAuth = state => state.auth;
