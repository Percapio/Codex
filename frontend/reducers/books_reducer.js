import { RECEIVE_BOOKS, RECEIVE_BOOK } from '../actions/books_actions';
import merge from 'lodash/merge';

export const AllBooks = (state = {}, action) => {
	Object.freeze(state);

	switch(action.type) {
		case RECEIVE_BOOKS:
			return action.books;

		default:
			return state;
	}
};

export const SingleBook = (state = {}, action) => {
	Object.freeze(state);

	switch(action.type) {
		case RECEIVE_BOOK:
			let newState = merge({}, state);
			return merge(newState, { [action.book.id]: action.book });

		default:
			return state;
	}
};
