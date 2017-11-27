import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllBooks } from '../../actions/books_actions';
import { getBookshelves } from '../../actions/bookshelves_actions';
import { 
	selectAllBooks, 
	selectBookshelves } from '../../selectors/selectors';	

import BooksIndex from './books_index';

const mapStateToProps = (state) => ({
	books: selectAllBooks(state),
	bookshelves: selectBookshelves(state),
	user: state.sessionReducer.user.username
});

const mapDispatchToProps = (dispatch) => ({
	getAllBooks: (user) => dispatch(getAllBooks(user)),
	getBookshelves: (user) => dispatch(getBookshelves(user))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(BooksIndex));