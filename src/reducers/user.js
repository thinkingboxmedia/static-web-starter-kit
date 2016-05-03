import {
  LOGGED_IN,
  LOGGED_OUT,
} from '../actions/user';

const initialState = {
  isLoggedIn: false,
}

export default (state = initialState, action) => {

  console.log('reducers', action.type);

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
