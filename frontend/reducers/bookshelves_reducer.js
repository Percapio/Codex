import { 
	RECEIVE_BOOKSHELVES,
	RECEIVE_BOOKSHELF,
	DELETE_BOOKSHELF,
	CREATE_BOOKSHELF
} from '../actions/bookshelves_actions';

import merge from 'lodash/merge';

export default (state = {}, action) => {
	Object.freeze(state);

	switch(action.type) {
		case RECEIVE_BOOKSHELVES:
			return action.bookshelves;

		case RECEIVE_BOOKSHELF:
			return merge({}, state, { [action.bookshelf.id]: action.bookshelf });

		case CREATE_BOOKSHELF:
			return merge({}, action.bookshelf);

		case DELETE_BOOKSHELF:
			let newState = merge({}, oldState);
			delete newState[action.bookshelf.id]
			return newState;

		default:
			return state;
	}
};