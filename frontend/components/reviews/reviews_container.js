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
import Reviews from './reviews';

const mapStateToProps = (state, ownProps) => {
	return({
		book: ownProps.book,
		reviews: selectAllReviews(state),
		users: selectAllUsers(state)
	})
};

const mapDispatchToProps = dispatch => ({
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