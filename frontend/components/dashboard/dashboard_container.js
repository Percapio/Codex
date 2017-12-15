import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Dashboard from './dashboard';
import { 
	selectAllBooks, 
	selectBookshelves 
} from '../../selectors/selectors';
import { getBookshelves } from '../../actions/bookshelves_actions';
import { getAllBooks } from '../../actions/books_actions';


const mapStateToProps = state => {
	let books = selectAllBooks(state);
	let bookId = Math.floor(Math.random() * books.length);

	return({
		user: state.session.user,
		userId: state.session.userId,
		bookshelves: selectBookshelves(state),
		books: books,
		random: books[bookId]
	});
};

const mapDispatchToProps = dispatch => ({
	getAllBooks: () => dispatch(getAllBooks()),
	getBookshelves: (userId) => dispatch(getBookshelves(userId)),
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard));