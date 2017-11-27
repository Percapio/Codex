import { connect } from 'react-redux';
import { selectAllBooks, selectBookshelves } from '../../selectors/selectors';
import { withRouter } from 'react-router-dom';
import { 
	getBookshelves,
	getBookshelf,
	createBookshelf,
	deleteBookshelf,
	editBookshelf
} from '../../actions/bookshelves_actions';

import Bookshelf from './bookshelf';

const mapStateToProps = state => ({
	user_id: state.session.user.id,
	bookshelves: selectBookshelves(state)
});

const mapDispatchToProps = dispatch => ({
	getBookshelves: (userId) => dispatch(getBookshelves(userId)),
	getBookshelf: (shelf, userId) => dispatch(getBookshelf(shelf, userId)),
	createBookshelf: (shelf, userId) => dispatch(createBookshelf(shelf, userId)),
	deleteBookshelf: (shelfId, userId) => dispatch(deleteBookshelf((shelfId, userId))),
	editBookshelf: (shelf, userId) => dispatch(editBookshelf(shelf, userId))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Bookshelf));