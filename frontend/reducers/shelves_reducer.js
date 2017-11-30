import { 
	RECEIVE_ALL_SHELVES,
	REMOVE_SHELF,
	CREATE_SHELF,
	RECEIVE_SHELF } from '../actions/shelves_actions';

import merge from 'lodash/merge';

export default (state = {}, action) => {
	Object.freeze(state);
	switch(action.type) {
		case RECEIVE_ALL_SHELVES:
			return action.shelves;

		case REMOVE_SHELF:
			return {};

		case CREATE_SHELF:
			return merge({}, state, {[action.shelf.id]: action.shelf});


		case RECEIVE_SHELF:
			return action.shelf;

		default:
			return state;
	}
};