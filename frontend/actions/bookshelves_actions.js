import * as APIUtil from '../util/bookshelves_api_util';

export const RECEIVE_BOOKSHELF = 'RECEIVE_BOOKSHELF';
export const DELETE_BOOKSHELF = 'DELETE_BOOKSHELF';
export const CREATE_BOOKSHELF = 'CREATE_BOOKSHELF';

const receiveBookshelf = bookshelf => ({
	type: RECEIVE_BOOKSHELF,
	bookshelf
});

const removeBookshelf = bookshelf => ({
	type: DELETE_BOOKSHELF,
	bookshelf
});

const makeBookshelf = bookshelf => ({
	type: CREATE_BOOKSHELF,
	bookshelf
});

export const getBookshelf = (id) => dispatch => (
	APIUtil.getBookshelf(id).then(
		(bookshelf) => dispatch(receiveBookshelf(bookshelf)) )
);

export const createBookshelf = (bookshelf) => dispatch => (
	APIUtil.createBookshelf(bookshelf).then(
		(payload) => dispatch(makeBookshelf(payload)) )
);

export const deleteBookshelf = (id) => dispatch => (
	APIUtil.deleteBookshelf(id).then(
		(bookshelf) => dispatch(removeBookshelf(bookshelf)) )
);

export const editBookshelf = (bookshelf) => dispatch => (
	APIUtil.editBookshelf(bookshelf).then(
		(payload) => dispatch(receiveBookshelf(payload)) )
);