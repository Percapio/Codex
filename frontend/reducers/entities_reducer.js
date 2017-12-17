import { combineReducers } from 'redux';

import { AllBooks, SingleBook } from './books_reducer';
import bookshelves from './bookshelves_reducer';
import shelves from './shelves_reducer';
import reviews from './reviews_reducer';
import { searches } from './searches_reducer';

export default combineReducers({
	suggested: SingleBook,
	books: AllBooks,
	bookshelves,
	shelves,
	reviews,
	searches
});