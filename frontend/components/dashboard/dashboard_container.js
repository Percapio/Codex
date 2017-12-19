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
	getMultipleBooks,
	getSingleBook
} from '../../actions/books_actions';

import { createBookshelf } from '../../actions/bookshelves_actions';

const mapStateToProps = state => ({
	user: state.session.user,
	bookshelves: selectBookshelves(state),
	books: selectAllBooks(state),
	random: Object.values(state.entities.suggested)[0]	
});

const mapDispatchToProps = dispatch => ({
	getAllBooks: () => dispatch(getAllBooks()),
	getSingleBook: (bookId) => dispatch(getSingleBook(bookId)),

	getMultipleBooks: range => dispatch(getMultipleBooks(range)),
	getBookshelves: (userId) => dispatch(getBookshelves(userId)),
	createBookshelf: (shelf, userId) => dispatch(createBookshelf(shelf, userId)),
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard));