import * as APIUtil from '../util/reviews_api_util';

export const FETCH_REVIEW = 'FETCH_REVIEW';
export const FETCH_REVIEWS = 'FETCH_REVIEWS';
export const DESTROY_REVIEW = 'DESTROY_REVIEW';

const fetchReview = (review) => (
	type: FETCH_REVIEW,
	review
);

const fetchReviews = (reviews) => (
	type: FETCH_REVIEWS,
	reviews
);

const deleteReview = (review) => (
	type: DESTROY_REVIEW,
	review
);

export const getReviews = reviews => dispatch => (
	APIUtil.getReviews(reviews).then(
		reviews => dispatch(fetchReviews(reviews)) )
);

export const createReview = review => dispatch => (
	APIUtil.createReview(review).then(
		review => dispatch(fetchReview(review)) )
);

export const destroyReview = review => dispatch => (
	APIUtil.destroyReview(review).then(
		review => dispatch(deleteReview(review)) )
);

export const updateReview = review => dispatch => (
	APIUtil.updateReview(review).then(
		review => dispatch(fetchReview(review)) )
);