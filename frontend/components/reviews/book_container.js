import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Book from './book';
import { 
	getReviews,
	createReview,
	destroyReview,
	updateReview,
} from '../../actions/reviews_actions';
import { selectAllReviews } from '../../selectors/selectors';

const mapStateToProps = (state, ownProps) => {
	if (reviews.length > 0) {
		reviewId = reviews[0].book_id
	}

	return({
		book: ownProps.book,
		reviews: reviews,
		reviewId: reviewId
	})
};

const mapDispatchToProps = dispatch => ({
	getReviews: reviews => dispatch(getReviews(reviews)),
	createReview: review => dispatch(createReview(review)),
	destroyReview: review => dispatch(destroyReview(review)),
	updateReview: review => dispatch(destroyReview(review)),
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Book));