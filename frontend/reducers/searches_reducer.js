import {
	RECEIVE_SEARCH_RESULTS,
	RECEIVE_BOOKS,
	RECEIVE_BOOK
} from '../actions/searches_actions';

export const bookSearches = ( state = {}, action ) => {
	Object.freeze(state);

	switch (action.type) {
		case RECEIVE_BOOKS:
			return action.books;
		case RECEIVE_BOOK:
			return action.book;
		default:
			return state;
	}
};


export const searches = ( state = {}, action ) => {
	Object.freeze(state);

	switch (action.type) {
		case RECEIVE_SEARCH_RESULTS:
			return action.searchResults;
		default:
			return state;
	}
};