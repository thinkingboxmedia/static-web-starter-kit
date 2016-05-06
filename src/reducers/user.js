import {
  LOGGED_IN,
  LOGGED_OUT,
} from '../actions/user';

const initialState = {
  isLoggedIn: false,
};


export function user(state = initialState, action) {
  switch (action.type) {

    case LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };

    case LOGGED_OUT:
      return initialState;

    default:
      return state;
  }
}
