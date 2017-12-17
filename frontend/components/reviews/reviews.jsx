import React from 'react';
import ReviewItem from './review_item';
import ReviewForm from './review_form';
import UserReview from './user_review';

export default class Reviews extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getReviews(this.props.book.id)
	}

	render() {
		let userReview;
		let reviews = [];
		let reviewsTemp = Object.entries(this.props.reviews);

		if (reviewsTemp.length > 0) {
			let index, review;

			reviewsTemp.map( (item) => {
				[index, review] = item;

				if (review.author_id === this.props.user.id) {
					userReview = 
										<UserReview
											book= { this.props.book }
											review= { review }
											updateReview= { this.props.updateReview }
											destroyReview= { this.props.destroyReview }
											user= { this.props.user } />
				} else {
						reviews.push( <ReviewItem key= { index } review= { review } /> );
				}
			})
		}

		if (typeof userReview === 'undefined' ) {
			userReview = <ReviewForm
											user= { this.props.user }
											book= { this.props.book } 
											createReview= { this.props.createReview } />
		}

		return(
			<div className= 'review-form-container'>

				{ userReview }

				<ul className= 'reviews'>
					{ reviews }
				</ul>
			</div>
		)
	}
}