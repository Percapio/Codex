import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
	getReviews,
	createReview,
	destroyReview,
	updateReview,
	grabUsers } from '../../actions/reviews_actions';
import { 
	selectAllReviews,
	selectAllUsers } from '../../selectors/selectors';
import { getSingleBook } from '../../actions/books_actions';
import { getAllBooks } from '../../actions/books_actions';
import Reviews from './reviews';

const mapStateToProps = (state, ownProps) => {
	return({
		book: state.entities.books[ownProps.match.params.id - 1],
		bookId: parseInt(ownProps.match.params.id),
		userId: state.session.user.id,
		reviews: selectAllReviews(state),
		users: selectAllUsers(state)
	})
};

const mapDispatchToProps = dispatch => ({
	getAllBooks: () => dispatch(getAllBooks()),
	getReviews: reviews => dispatch(getReviews(reviews)),
	createReview: review => dispatch(createReview(review)),
	destroyReview: review => dispatch(destroyReview(review)),
	updateReview: review => dispatch(destroyReview(review)),
	grabUsers: () => dispatch(grabUsers())
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Reviews));