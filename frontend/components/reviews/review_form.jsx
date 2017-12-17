import React from 'react';

export default class ReviewForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			book_id: props.book.id,
			author_id: props.user.id,
			title: '',
			description: '',
			author_name: props.user.username
		};

		this.handleSubmit = this.handleSubmit.bind(this);
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

	render() {
		return(
			<form className= 'review-form' onSubmit= { this.handleSubmit }>
				<label>Title
					<input
						input= 'text'
						value= { this.state.title }
						onChange= { this.handleChange('title') }
						placeholder= { this.state.title }
						className= 'review-title' 
						/>
				</label>

				<label>Review
					<textarea
						value= { this.state.description }
						onChange= { this.handleChange('description') }
						placeholder= { this.state.description }
						className= 'review-body'></textarea>
				</label>

				<input type='submit' value='Submit' className= 'submit-button' />
			</form>
		)
	};
}