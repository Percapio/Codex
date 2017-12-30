import React from 'react';

export default ({ review }) => (
	<li>
		<div className= 'review-container'>
			<div className= 'review-header'>
				<div className= 'review-author'>
					{ review.author_name }
				</div>
				<div className= 'review-title'>
					Title:
					<br/>
					{ review.title }
					<br/><br/>
				</div>
			</div>


			<div className= 'review-description'>
				Review:
				<br/>
				{ review.description }
			</div>
		</div>
		<hr />
	</li>
)