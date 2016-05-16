import {
  LOGGED_IN,
  LOGGED_OUT,
} from './userActionsType';

/**
 * logIn
 */

export function logIn() {
  return { type: LOGGED_IN };
}

/**
 * logOut
 */

export function logOut() {
  return { type: LOGGED_OUT };
}
