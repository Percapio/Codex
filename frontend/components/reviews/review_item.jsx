import React from 'react';

export default ({ review, destroyReview, updateReview }) => (
	<li>
		<div className= 'review-container'>
			<div className= 'review-header'>
				<div className= 'review-title'>
					{ review.title }
				</div>
				<div className= 'review-author'>
					{ review.author }
				</div>
			</div>

			<div className= 'review-description'>
				{ review.description }
			</div>
		</div>
	</li>
);