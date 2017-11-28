import React from 'react';
import BookShowItem from './book_show_item';

class BookShow extends React.Component {
	componentDidMount() {
		this.props.getSingleBook(this.props.bookId);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.props.history.push(`/user/${this.props.userId}`);
	}

	render() {
		const { book } = this.props;
		
		return(
			<div className='book-show-component'>
				<h2>Book Show</h2>

				<div className= 'book-info'>
					<div className= 'book-title'>
						<h3>{ book.title }</h3>
						<p>{ book.author }</p>
					</div>

					<div className= 'book-summary'>
						<p>{ book.summary }</p>
					</div>
				</div>

				<button className= 'back-button' onClick= { this.handleClick }>Go Back!
				</button>
			</div>
		)
	}
}

export default BookShow;