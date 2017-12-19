import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Dashboard from './dashboard';
import { 
	selectAllBooks, 
	selectBookshelves,
	selectAllThumbs
} from '../../selectors/selectors';

import { getBookshelves } from '../../actions/bookshelves_actions';
import { 
	getAllBooks,
	getMultipleBooks,
	getSingleBook
} from '../../actions/books_actions';

import {
	createThumb,
	removeThumb,
	getThumb	
} from '../../actions/thumbs_actions';

import { createBookshelf } from '../../actions/bookshelves_actions';

const mapStateToProps = state => ({
	user: state.session.user,
	bookshelves: selectBookshelves(state),
	books: selectAllBooks(state),
	thumbs: selectAllThumbs(state),
	random: Object.values(state.entities.suggested)[0]	
});

const mapDispatchToProps = dispatch => ({
	getAllBooks: () => dispatch(getAllBooks()),
	getMultipleBooks: range => dispatch(getMultipleBooks(range)),
	getBookshelves: (userId) => dispatch(getBookshelves(userId)),
	getSingleBook: (bookId) => dispatch(getSingleBook(bookId)),
	createBookshelf: (shelf, userId) => dispatch(createBookshelf(shelf, userId)),

	createThumb: thumb => dispatch(createThumb(thumb)),
	removeThumb: thumb => dispatch(removeThumb(thumb)),
	getThumb: (book_id) => dispatch(getThumb(book_id)),
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard));