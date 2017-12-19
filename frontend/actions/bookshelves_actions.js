import * as APIUtil from '../util/bookshelves_api_util';

export const RECEIVE_BOOKSHELVES = 'RECEIVE_BOOKSHELVES';
export const CREATE_BOOKSHELF = 'CREATE_BOOKSHELF';

const receiveBookshelves = bookshelves => ({
	type: RECEIVE_BOOKSHELVES,
	bookshelves
});

const makeBookshelf = bookshelf => ({
	type: CREATE_BOOKSHELF,
	bookshelf
});

export const getBookshelves = (userId) => dispatch => (
	APIUtil.getBookshelves(userId).then(
		(payload) => dispatch(receiveBookshelves(payload)) )
);

export const createBookshelf = (shelf) => dispatch => (
	APIUtil.createBookshelf(shelf).then(
		(payload) => dispatch(makeBookshelf(payload)) )
);

export const deleteBookshelf = (shelfId, userId) => dispatch => (
	APIUtil.deleteBookshelf(shelfId, userId).then(
		(payload) => dispatch(receiveBookshelves(payload)) )
);