import {
  RESIZE_WINDOW,
} from '../actions/types';

const initialState = {
  stageWidth: 0,
  stageHeight: 0,
};

export default function browser(state = initialState, action) {
  switch (action.type) {

    case RESIZE_WINDOW:
      return {
        stageWidth: action.stageWidth,
        stageHeight: action.stageHeight,
      };

    default:
      return state;
  }
}
