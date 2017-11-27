import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllBooks } from '../../actions/books_actions';
import { selectAllBooks } from '../../selectors/selectors';	

import BooksIndex from './books_index';

const mapStateToProps = (state) => ({
	books: selectAllBooks(state),
	user: state.session.user.username
});

const mapDispatchToProps = (dispatch) => ({
	getAllBooks: () => dispatch(getAllBooks())
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(BooksIndex));