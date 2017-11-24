import values from 'lodash/values';

export const selectAllBooks = state => (
	values(state.entitiesReducer.booksReducer)
);

export const selectSingleBook = state => (
	values(state.entitiesReducer.booksReducer)
);