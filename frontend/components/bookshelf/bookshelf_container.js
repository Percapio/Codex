import { connect } from 'react-redux';
import { selectAllBooks, selectBookshelves } from '../../selectors/selectors';
import { withRouter } from 'react-router-dom';
import { 
	getBookshelves,
	createBookshelf,
	deleteBookshelf,
} from '../../actions/bookshelves_actions';
import { getAllBooks } from '../../actions/books_actions';
import { deleteShelf, createShelf } from '../../actions/shelves_actions';

import Bookshelf from './bookshelf';

const mapStateToProps = state => {
	return({
		user: state.session.user.username,
		bookshelves: selectBookshelves(state),
	});
};

const mapDispatchToProps = dispatch => ({
	getAllBooks: () => dispatch(getAllBooks()),
	getBookshelves: (userId) => dispatch(getBookshelves(userId)),
	createBookshelf: (shelf, userId) => dispatch(createBookshelf(shelf, userId)),
	deleteBookshelf: (shelfId, userId) => dispatch(deleteBookshelf(shelfId, userId)),
	deleteShelf: (shelfId) => dispatch(deleteShelf(shelfId))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Bookshelf));