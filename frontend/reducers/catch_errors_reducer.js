import { RECEIVE_ERRORS } from '../actions/shelves_actions';

export default (state = [], action) => {
	Object.freeze(state);

	switch(action.type) {
		case RECEIVE_ERRORS:
			return state.concat([action.errors]);

		default:
			return state;
	}
};