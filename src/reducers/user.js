import {
  LOGGED_IN,
  LOGGED_OUT,
} from '../actions/types';

const initialState = {
  isLoggedIn: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {

    case LOGGED_IN:
      return {
        isLoggedIn: true,
      };

    case LOGGED_OUT:
      return initialState;

    default:
      return state;
  }
}
