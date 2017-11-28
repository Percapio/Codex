import { 
	RECEIVE_ALL_SHELVES,
	RECEIVE_SINGLE_SHELF,
	CREATE_SHELF } from '../actions/shelves_actions';

import merge from 'lodash/merge';

export default (state = {}, action) => {
	Object.freeze(state);

	switch(action.type) {
		case RECEIVE_ALL_SHELVES:
			return action.shelves;

		case RECEIVE_SINGLE_SHELF:
			return merge({}, state, {[action.shelf.id]: action.shelf})

		case CREATE_SHELF:
			return merge({}, action.shelf)

		default:
			return state;
	}
};