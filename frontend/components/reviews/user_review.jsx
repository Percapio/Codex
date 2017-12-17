import React from 'react';

export default class UserReview extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			book_id: props.book.id,
			author_id: props.user.id,
			title: '',
			description: '',
			author_name: props.user.username,
			id: props.review.id
		};

		this.editForm = false;
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDestroy = this.handleDestroy.bind(this);
		this.handleRevert = this.handleRevert.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.updateReview(this.state);
		this.handleRevert();
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleEdit(e) {
		e.preventDefault();
		this.setState({ title: this.props.review.title, description: this.props.review.description });
	}

	handleRevert() {
		this.setState({ title: '', description: '' });
	}

	handleDestroy(e) {
		e.preventDefault();
		this.props.destroyReview(this.props.review);
		this.handleRevert();
	}

	render() {
		let reviewForm;
		let review = this.props.review;

		if (this.state.title.length === 0) {
			reviewForm = 
									<div className= 'review-container'>
										<hr />
											<h3>My Review:</h3>
										<hr />
										<div className= 'review-header'>
											<div className= 'review-title'>
												{ review.title }
											</div>
											<div className= 'review-author'>
												--{ review.author_name }
											</div>
										</div>

										<hr />

										<div className= 'review-description'>
											Review:
											<br/>
											{ review.description }
										</div>
										<div className= 'review-edits'>
											<button onClick= { this.handleEdit }>Edit</button>
											<button onClick= { this.handleDestroy }>Delete</button>
										</div>
									</div>
		} else {
			reviewForm =
									<form className= 'review-form' onSubmit= { this.handleSubmit }>
										<label>Title
											<input
												input= 'text'
												value= { this.state.title }
												onChange= { this.handleChange('title') }
												placeholder= { review.title }
												className= 'review-title' 
												/>
										</label>

										<label>Review
											<textarea
												value= { this.state.description }
												onChange= { this.handleChange('description') }
												placeholder= { review.description }
												className= 'review-body'></textarea>
										</label>

										<input type='submit' value='Edit' className= 'submit-button' />
									</form>
		}

		return(
			<div>
				{ reviewForm }
			</div>
		)
	}
}