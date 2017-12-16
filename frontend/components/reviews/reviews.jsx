import React from 'react';
import ReviewItem from './review_item';

export default class Reviews extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			book_id: '',
			author_id: props.user.id,
			title: '',
			description: '',
			author_name: props.user.username
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		debugger;
		if (this.props.reviewId === nextProps.bookId) {
		} else {
			this.props.getReviews(this.props.bookId);
		}
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({ book_id: this.props.bookId }, () => (
			this.props.createReview(this.state)
		));
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.currentTarget.value
		});
	}

	render() {
		let reviews;

		if (this.props.reviews.length > 0) {
			reviews = this.props.reviews.map(
				(review, index) => {
					return (
						<ReviewItem
							key= { index }
							review= { review }
							destroyReview= { this.props.destroyReview }
							updateReview= { this.props.updateReview } />
					)
				}
			)
		}

	return(
		<div className= 'review-form-container'>
			<form className= 'review-form' onSubmit= { this.handleSubmit }>
				<label>Title
					<input
						input= 'text'
						value= { this.state.title }
						onChange= { this.handleChange('title') }
						className= 'review-title' 
						/>
				</label>

				<label>Review
					<textarea
						value= { this.state.description }
						onChange= { this.handleChange('description') }
						className= 'review-body'></textarea>
				</label>

				<input type='submit' value='Submit' className= 'submit-button'/>
			</form>

			<ul className= 'reviews'>
				{ reviews }
			</ul>
		</div>
		)
	};
}