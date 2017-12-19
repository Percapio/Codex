import { 
	RECEIVE_BOOKSHELVES,
	CREATE_BOOKSHELF
} from '../actions/bookshelves_actions';

import merge from 'lodash/merge';

export default (state = {}, action) => {
	Object.freeze(state);

	switch(action.type) {
		case RECEIVE_BOOKSHELVES:
			return action.bookshelves;

		case CREATE_BOOKSHELF:
			return merge({}, state, { [action.bookshelf.id]: action.bookshelf });

		default:
			return state;
	}
};