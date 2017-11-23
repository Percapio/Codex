import { RECEIVE_BOOKS, RECEIVE_BOOK } from '../actions/books_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
	Object.freeze(state);

	switch(action.type) {
		case RECEIVE_BOOKS:
			return merge({}, action.books);

		case RECEIVE_BOOK:
			const book = action.book;
			return merge({}, state, {[action.book.id]: action.book });

		default:
			return state;
	}
};
