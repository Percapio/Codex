import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Dashboard from './dashboard';
import { 
	selectAllBooks, 
	selectBookshelves 
} from '../../selectors/selectors';
import { getBookshelves } from '../../actions/bookshelves_actions';
import { 
	getAllBooks,
	getSingleBook
} from '../../actions/books_actions';

import {
	createBookshelf,
	deleteBookshelf
} from '../../actions/bookshelves_actions';
import {
	deleteShelf,
	createShelf
} from '../../actions/shelves_actions';

const mapStateToProps = (state, ownProps) => {
	let books = selectAllBooks(state);

	return({
		user: state.session.user,
		bookshelves: selectBookshelves(state),
		books: books,
		random: Object.values(state.entities.suggested)[0]
	});
};

const mapDispatchToProps = dispatch => ({
	getAllBooks: () => dispatch(getAllBooks()),
	getBookshelves: (userId) => dispatch(getBookshelves(userId)),
	getSingleBook: (bookId) => dispatch(getSingleBook(bookId)),

	createBookshelf: (shelf, userId) => dispatch(createBookshelf(shelf, userId)),
	deleteBookshelf: (shelfId, userId) => dispatch(deleteBookshelf(shelfId, userId)),
	deleteShelf: (shelfId) => dispatch(deleteShelf(shelfId)),
	createShelf: () => dispatch(createShelf()),
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard));