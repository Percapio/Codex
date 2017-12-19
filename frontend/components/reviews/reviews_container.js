import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { 
	getReviews,
	createReview,
	destroyReview,
	updateReview,
} from '../../actions/reviews_actions';

import {
	createThumb,
	removeThumb,
	getThumb	
} from '../../actions/thumbs_actions';

import { 
	selectAllReviews,
	selectAllThumbs
} from '../../selectors/selectors';

import Reviews from './reviews';

const mapStateToProps = (state, ownProps) => {
	let book = ownProps.book;
	let reviews = selectAllReviews(state);
	let reviewId;

	if (reviews.length > 0) {
		reviewId = reviews[0].book_id
	}

	return({
		user: ownProps.user,
		book: book,
		reviews: reviews,
		reviewId: reviewId,
		thumbs: selectAllThumbs(state),
	})
};

const mapDispatchToProps = dispatch => ({
	getReviews: reviews => dispatch(getReviews(reviews)),
	createReview: review => dispatch(createReview(review)),
	destroyReview: review => dispatch(destroyReview(review)),
	updateReview: review => dispatch(updateReview(review)),

	createThumb: thumb => dispatch(createThumb(thumb)),
	removeThumb: thumb => dispatch(removeThumb(thumb)),
	getThumb: book_id => dispatch(getThumb(book_id))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Reviews));