import { connect } from 'react-redux';
import { selectAllBooks } from '../../reducers/selectors';
import { getAllBooks } from '../../actions/books_actions';
import BooksIndex from './books_index';

const mapStateToProps = (state) => ({
	books: selectAllBooks(state)
});

const mapDispatchToProps = (dispatch) => ({
	getAllBooks: () => dispatch(getAllBooks())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BooksIndex);