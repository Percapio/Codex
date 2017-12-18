export const getReviews = (book_id) => {
	return(
		$.ajax({
			method: 'GET',
			url: `api/reviews`,
			data: {
				book_id
			}
		})
	)
};

export const createReview = (review) => {
	return(
		$.ajax({
			method: 'POST',
			url: `api/users/${review.author_id}/reviews`,
			data: {
				review
			}
		})
	)
};

export const destroyReview = review => (
	$.ajax({
		method: 'DELETE',
		url: `api/users/${review.author_id}/reviews/${review.id}`,
	})
);

export const updateReview = review => (
	$.ajax({
		method: 'PATCH',
		url: `api/users/${review.author_id}/reviews/${review.id}`,
		data: {
			review
		}
	})
);
