import {
	RESIZE_WINDOW,
} from './types';

export const windowResize = (stageWidth, stageHeight) => ({
	type: RESIZE_WINDOW,
	payload: {
		stageWidth,
		stageHeight,
	},
});
