import values from 'lodash/values';

export const selectAllBooks = state => (
	values(state.entities.books)
);

export const selectBookshelves = state => (
	values(state.entities.bookshelves)
);

export const selectShelves = state => (
	values(state.entities.shelves)
);

export const selectBooksInBookshelf = (state) => (
	values(state.entities.books)
);

export const selectAllErrors = state => (
	values(state.errors)
);

export const selectAllReviews = state => (
	values(state.entities.reviews)
);

