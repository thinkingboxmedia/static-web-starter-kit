import {
  RESIZE_WINDOW,
} from './types';

/**
 * resize
 */

const resize = (stageWidth, stageHeight) => ({
  type: RESIZE_WINDOW,
  payload: {
    stageWidth,
    stageHeight,
  },
});

export default resize;
