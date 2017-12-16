import React from 'react';
import ReviewItem from './review_item';

export default class Reviews extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			book_id: props.book.id,
			author_id: props.user.id,
			title: '',
			description: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.getReviews(this.props.book.id);
		this.props.grabUsers();		
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createReview(this.state);
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.currentTarget.value
		});
	}

	chooseAuthor(review) {
		let users = this.props.users;

		for (let i=0; i < users.length; i++) {
			if (users[i].id === review.author_id)
				return users[i].username;
		}
	}

	render() {
		let reviews;

		if ((this.props.reviews.length > 0) && (this.props.users.length > 0)) {
			reviews = this.props.reviews.map(
				(review, index) => {
					let author = this.chooseAuthor(review);

					return (
						<ReviewItem
							key= { index }
							review= { review }
							destroyReview= { this.props.destroyReview }
							updateReview= { this.props.updateReview }
							author= { author } />
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