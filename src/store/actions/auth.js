import { AUTH_SET } from '../reducers/auth';

export const acAuthSet = value => ({
  type: AUTH_SET,
  payload: value
});
