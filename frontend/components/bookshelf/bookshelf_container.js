import { connect } from 'react-redux';
import { selectAllBooks, selectBookshelf } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';
import { 
	getBookshelf,
	createBookshelf,
	deleteBookshelf,
	editBookshelf
} from '../actions/bookshelves_actions';
import Bookshelf from './bookshelf';

const mapStateToProps = state => ({
	bookshelf: selectBookshelf(state)
});

const mapDispatchToProps = dispatch => ({
	getBookshelf: (id) => dispatch(getBookshelf(id)),
	createBookshelf: bookshelf => dispatch(createBookshelf(bookshelf)),
	deleteBookshelf: id => dispatch(deleteBookshelf(id)),
	editBookshelf: bookshelf => dispatch(editBookshelf(bookshelf))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Bookshelf));