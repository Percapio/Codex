import * as APIUtil from '../util/searches_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';

const receiveBook = book => ({
	type: RECEIVE_BOOK,
	book
});

const receiveSearchResults = searchResults => ({
	type: RECEIVE_SEARCH_RESULTS,
	searchResults
});

export const searchBooksDatabase = query => dispatch => (
	APIUtil.searchBooksDatabase(query).then(
		payload => dispatch(receiveSearchResults(payload))
	)
);

export const getBookByAuthor = author => dispatch => (
	APIUtil.getBookByAuthor(author).then(
		payload => dispatch(receiveSearchResults(payload))
	)
);

export const getBookByISBN = ISBN => dispatch => (
	APIUtil.getBookByISBN(ISBN).then(
		payload => dispatch(receiveSearchResults(payload))
	)
);

export const getRandomBook = () => dispatch => (
	APIUtil.getRandomBook().then(
		payload => dispatch(receiveBook(payload))
	)
);
