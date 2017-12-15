import { combineReducers } from 'redux';

import books from './books_reducer';
import bookshelves from './bookshelves_reducer';
import shelves from './shelves_reducer';
import reviews from './reviews_reducer';
import users from './users_reducer';
import { bookSearches, searches } from './searches_reducer';

export default combineReducers({
	books,
	bookshelves,
	shelves,
	reviews,
	users,
	searches,
	bookSearches
});