import {
  LOGGED_IN,
  LOGGED_OUT,
} from './userActionsType';

/**
 * logIn
 */

export const logIn = () => ({
  type: LOGGED_IN,
});

/**
 * logOut
 */

export const logOut = () => ({
  type: LOGGED_OUT,
});
