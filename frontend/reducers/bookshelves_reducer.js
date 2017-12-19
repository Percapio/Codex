import { 
	RECEIVE_BOOKSHELVES,
	DELETE_BOOKSHELF
} from '../actions/bookshelves_actions';

import merge from 'lodash/merge';

export default (state = {}, action) => {
	Object.freeze(state);

	switch(action.type) {
		case RECEIVE_BOOKSHELVES:
			return action.bookshelves;

		case DELETE_BOOKSHELF:
			let oldState = merge({}, state);
			delete oldState[action.bookshelf.id];
			return oldState;

		default:
			return state;
	}
};