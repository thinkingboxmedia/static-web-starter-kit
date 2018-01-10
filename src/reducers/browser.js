import {
	RESIZE_WINDOW,
} from 'src/actions/types';

const initialState = {
	stageWidth: 0,
	stageHeight: 0,
};

export default function browser(state = initialState, action) {

	switch (action.type) {

		case RESIZE_WINDOW:
			return {
				...state,
				stageWidth: action.payload.stageWidth,
				stageHeight: action.payload.stageHeight,
			};

		default:
			return state;
	}
	
}
