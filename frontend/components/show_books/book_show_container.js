import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectSingleBook } from '../../selectors/selectors';
import { getSingleBook } from '../../actions/books_actions';
import { getAllBooks } from '../../actions/books_actions';
import BookShow from './book_show';

const mapStateToProps = (state, ownProps) => {
	return({
		userId: state.session.user.id,
		book: state.entities.books[ownProps.match.params.id - 1]		
	})
};

const mapDispatchToProps = dispatch => ({
	getAllBooks: () => dispatch( getAllBooks() )
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(BookShow));