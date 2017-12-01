import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
	getReviews,
	createReview,
	destroyReview,
	updateReview } from '../../actions/reviews_actions';
import { selectAllReviews } from '../../selectors/selectors';
import Reviews from './reviews';

const mapStateToProps = (state, ownProps) => ({
	bookId: ownProps.match.params.id,
	reviews: selectAllReviews(state)
});

const mapDispatchToProps = dispatch => ({
	getReviews: reviews => dispatch(getReviews(reviews)),
	createReview: review => dispatch(createReview(review)),
	destroyReview: review => dispatch(destroyReview(review)),
	updateReview: review => dispatch(destroyReview(review))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Reviews));