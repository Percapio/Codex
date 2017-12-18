import { 
	RECEIVE_ALL_SHELVES,
	RECEIVE_SHELF } from '../actions/shelves_actions';

import merge from 'lodash/merge';

export default (state = {}, action) => {
	Object.freeze(state);
	
	switch(action.type) {
		case RECEIVE_ALL_SHELVES:
			return action.shelves;

		case RECEIVE_SHELF:
	 		return merge({}, state, {[action.shelf.id]: action.shelf});

		default:
			return state;
	}
};