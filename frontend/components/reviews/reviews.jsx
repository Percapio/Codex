import React from 'react';
import ReviewItem from './review_item';

class Reviews extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			book_id: 0,
			author_id: 0,
			title: '',
			description: ''
		}


	}

	handleReviewForm() {
		// if (  )
		// <form className= 'review-form'>

		// </form>
	}

	componentDidMount() {
		this.props.getReviews(this.props.bookId);
	}

	render() {
		const reviews = this.props.reviews.map(
			(review, index) => {
				return (
					<ReviewItem
						key= { index }
						review= { review }
						destroyReview= { this.props.destroyReview }
						updateReview= { this.props.updateReview } />
				)
			});


		return(

			<div>
				{ this.handleReviewForm() }

				<ul>
					{ reviews }
				</ul>
			</div>
		)
	}
}

export default Reviews;