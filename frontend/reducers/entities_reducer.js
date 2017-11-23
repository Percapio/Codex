import { combineReducers } from 'redux';

import booksReducer from './books_reducer';
import bookshelvesReducer from './bookshelves_reducer';

export default combineReducers({
	booksReducer,
	bookshelvesReducer
});