import * as APIUtil from '../util/books_api_util';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';

const receiveBooks = (books) => ({
	type: RECEIVE_BOOKS,
	books
});

const receiveBook = (book) => ({
	type: RECEIVE_BOOK,
	book
});

export const getAllBooks = (books) => dispatch => (
	 APIUtil.getAllBooks(books).then(
		(books) => dispatch(receiveBooks(books)) )
);

export const getSingleBook = id => dispatch => (
	APIUtil.getSingleBook(id).then(
		(book) => dispatch(receiveBook(book)) )
);