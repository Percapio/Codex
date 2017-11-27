import { connect } from 'react-redux';
import { selectSingleBook } from '../../selectors/selectors';
import { getSingleBook } from '../../actions/books_actions';
import BookShow from './book_show';

const mapStateToProps = (state) => ({
	book: selectSingleBook(state)
});

const mapDispatchToProps = (dispatch) => ({
	getSingleBook: (bookId) => dispatch(getSingleBook(bookId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BookShow);