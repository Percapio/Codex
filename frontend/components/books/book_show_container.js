import { connect } from 'react-redux';
import { selectSingleBook } from '../../reducers/selectors';
import { getSingleBook } from '../../actions/books_actions';
import BookShow from './book_show';

const mapStateToProps = (state) => ({
	book: selectSingleBook(state)
});

const mapDispatchToProps = (dispatch) => ({
	// getSingleBook: (bookId) => dispatch(getSingleBook(bookId))
	getSingleBook: () => dispatch(getSingleBook())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BookShow);