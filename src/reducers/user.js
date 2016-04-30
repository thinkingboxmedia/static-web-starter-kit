export const LOGGED_IN = '@@user/LOGGED_IN'
export const LOGGED_OUT = '@@user/LOGGED_OUT'

const initialState = {
  isLoggedIn: false,
}

export function user(state = initialState, { type, payload } = {}) {
  if (type === LOGGED_IN) {
    return {
      isLoggedIn: true,
    };
  }
  if (type === LOGGED_OUT) {
    return initialState;
  }

  return state
}

module.exports = user;
