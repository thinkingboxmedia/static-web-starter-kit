import {
  RESIZE_WINDOW,
} from './types';

/**
 * resize
 */

export const resize = (stageWidth, stageHeight) => ({
  type: RESIZE_WINDOW,
  stageWidth,
  stageHeight,
});
