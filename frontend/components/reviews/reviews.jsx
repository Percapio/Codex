import React from 'react';
import ReviewItem from './review_item';
import BookShow from './book_show';
import BookShelfContainer from '../bookshelf/bookshelf_container';
import SideBook from '../show_books/side_book';

class Reviews extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			book_id: '',
			author_id: '',
			title: '',
			description: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.getAllBooks();
		this.props.getReviews(this.props.bookId);
		this.props.grabUsers();
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({
			book_id: this.props.book.id,
			author_id: this.props.userId
		})
		this.props.createReview(this.state);
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleBookShow() {
		if (this.props.book) {
			return <BookShow book= { this.props.book } />
		}
	}

	chooseAuthor(review) {
		if (this.props.users.length > 0) {
			return this.props.users[review.author_id].username;
		}
	}

	render() {
		const reviews = this.props.reviews.map(
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

	return(
		<div className= 'main-component'>
			<div className= 'index'>

				<div className= 'index-2'>
					<SideBook />

					<div className= 'show-review'>
						{ this.handleBookShow() }

						<form className= 'review-form' onSubmit= { this.handleSubmit }>
							<label>Title
								<input
									input= 'text'
									value= { this.state.title }
									onChange= { this.handleChange('title') }
									/>
							</label>

							<label>Review
								<textarea
									value= { this.state.description }
									onChange= { this.handleChange('description') }> </textarea>
							</label>

							<input type='submit' value='Submit' className= 'submit-button'/>
						</form>

						<ul>
							{ reviews }
						</ul>
					</div>
				</div>

				<div className= 'index-1'>
					<BookShelfContainer />
				</div>
			</div>
		</div>
	)
}};

export default Reviews;