import { combineReducers } from 'redux';

import books from './books_reducer';
import bookshelves from './bookshelves_reducer';
import shelves from './shelves_reducer';

export default combineReducers({
	books,
	bookshelves,
	shelves
});