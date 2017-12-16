import React from 'react';
import BookInfo from './book_info';
import ReviewsContainer from './reviews_container';

export default class Book extends React.Component {
	render() {
		let bookId, book, bookInfo, bookReviews;

		if (this.props.books.length > 0) {
			bookId = parseInt(this.props.location.slice(6));
			book = this.props.books[bookId];

			bookInfo = <BookInfo book= { book } />
			bookReviews = <ReviewsContainer
											user= { this.props.user }
											book= { book } />
		}

		return (
			<div>
				{ bookInfo }
				{ bookReviews }
			</div>
		)		
	}
}
