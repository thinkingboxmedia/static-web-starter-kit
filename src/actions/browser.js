import {
  RESIZE_WINDOW,
} from './types';

/**
 * windowResize
 */

export const windowResize = (stageWidth, stageHeight) => ({
  type: RESIZE_WINDOW,
  payload: {
    stageWidth,
    stageHeight,
  },
});
