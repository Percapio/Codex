import * as APIUtil from '../util/bookshelves_api_util';

export const RECEIVE_BOOKSHELVES = 'RECEIVE_BOOKSHELVES';
export const DELETE_BOOKSHELF = 'DELETE_BOOKSHELF';

const receiveBookshelves = bookshelves => ({
	type: RECEIVE_BOOKSHELVES,
	bookshelves
});

const removeBookshelf = bookshelf => ({
	type: DELETE_BOOKSHELF,
	bookshelf
})

export const getBookshelves = (userId) => dispatch => (
	APIUtil.getBookshelves(userId).then(
		(payload) => dispatch(receiveBookshelves(payload)) )
);

export const createBookshelf = (shelf) => dispatch => (
	APIUtil.createBookshelf(shelf).then(
		(payload) => dispatch(receiveBookshelves(payload)) )
);

export const deleteBookshelf = (shelf) => dispatch => (
	APIUtil.deleteBookshelf(shelf).then(
		(payload) => dispatch(receiveBookshelves(payload)) )
);

export const createShelf = (shelf) => dispatch => {
	return(
		APIUtil.createShelf(shelf).then(
			payload => dispatch(receiveBookshelves(payload)) )
	)
};

export const deleteShelf = (shelfId) => dispatch => (
	APIUtil.deleteShelf(shelfId).then(
		(payload) => dispatch(receiveBookshelves(payload)) )
);