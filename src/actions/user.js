import {
  LOGGED_IN,
  LOGGED_OUT,
} from './types';

/**
 * logIn
 */

export const login = () => ({
  type: LOGGED_IN,
});

/**
 * logOut
 */

export const logout = () => ({
  type: LOGGED_OUT,
});
