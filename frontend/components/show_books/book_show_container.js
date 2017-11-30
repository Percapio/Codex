import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectSingleBook } from '../../selectors/selectors';
import { getSingleBook } from '../../actions/books_actions';
import BookShow from './book_show';

const mapStateToProps = (state, ownProps) => ({
	userId: state.session.user.id,
	book: state.entities.books[ownProps.match.params.id - 1]
});

export default withRouter(connect(
	mapStateToProps,
	null
)(BookShow));