import * as APIUtil from '../util/reviews_api_util';

export const FETCH_REVIEW = 'FETCH_REVIEW';
export const FETCH_REVIEWS = 'FETCH_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const fetchReview = (review) => ({
	type: FETCH_REVIEW,
	review
});

const fetchReviews = (reviews) => ({
	type: FETCH_REVIEWS,
	reviews
});

const removeReview = review => ({
	type: REMOVE_REVIEW,
	review
})

export const getReviews = reviews => dispatch => (
	APIUtil.getReviews(reviews).then(
		payload => dispatch(fetchReviews(payload)) )
);

export const createReview = review => dispatch => (
	APIUtil.createReview(review).then(
		payload => dispatch(fetchReview(payload)) )
);

export const updateReview = review => dispatch => (
	APIUtil.updateReview(review).then(
		payload => dispatch(fetchReview(payload)) )
);

export const destroyReview = review => dispatch => (
	APIUtil.destroyReview(review).then(
		(payload) => dispatch(removeReview(payload)) )
);
