export const getReviews = (book_id) => (
	$.ajax({
		method: 'GET',
		url: `api/reviews`,
		data: {
			book_id
		}
	})
);

export const createReview = (review) => (
	$.ajax({
		method: 'POST',
		url: `api/users/${review.user_id}/reviews`,
		data: {
			review
		}
	})
);

export const destroyReview = review => (
	$.ajax({
		method: 'DELETE',
		url: `api/users/${review.user_id}/reviews/${review.id}`,
	})
);

export const updateReview = review => (
	$.ajax({
		method: 'PATCH',
		url: `api/users/${review.user_id}/reviews/${review.id}`,
		data: {
			review
		}
	})
);