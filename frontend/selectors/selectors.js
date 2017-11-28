import values from 'lodash/values';

export const selectAllBooks = state => (
	values(state.entities.books)
);

export const selectBookshelves = state => (
	values(state.entities.bookshelves)
);

export const selectShelf = state => (
	values(state.entities.shelves)
);

export const selectBooksInBookshelf = (state, bookshelfId) => (
	values(state.entities.bookshelves)[bookshelfId]
);

export const selectAllErrors = state => (
	values(state.errors)
);