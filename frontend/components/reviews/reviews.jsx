import React from 'react';
import ReviewItem from './review_item';
import ReviewForm from './review_form';
import UserReview from './user_review';

export default class Reviews extends React.Component {
	constructor(props) {
		super(props);

		this.handleUp = this.handleUp.bind(this);
		this.handleDown = this.handleDown.bind(this);
	}

	componentDidMount() {
		this.props.getReviews(this.props.book.id);
		this.props.getThumb(this.props.book.id);
	}

	handleUp(e) {
		e.preventDefault();
		this.props.createThumb({ up: 'true', book_id: parseInt(this.props.book.id) });
	}	

	handleDown(e) {
		e.preventDefault();
		this.props.createThumb({ up: 'false', book_id: parseInt(this.props.book.id) });
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

		let thumbs = this.props.thumbs;
		let up = 0;
		let down = 0;

		if (typeof thumbs != 'undefined') {
			if (thumbs.length > 0) {
				for (let i=0; i<thumbs.length; i++) {
					if (thumbs[i].up === 'true') {
						up++;
					} else if (thumbs[i].up === 'false') {
						down++;
					}
				}
			}
		}

		return(
			<div className= 'review-form-container'>

				{ userReview }

				<ul className= 'thumbs'>
					<li onClick= { this.handleUp }>
						<i className="fa fa-thumbs-o-up" aria-hidden="true" />
						{ up }
					</li>
					<li onClick= { this.handleDown } >
						<i className="fa fa-thumbs-o-down" aria-hidden="true" />
						{ down }
					</li>
				</ul>

				<ul className= 'reviews'>
					{ reviews }
				</ul>
			</div>
		)
	}
}