import React from 'react';
import BookInfo from './book_info';
import ReviewsContainer from './reviews_container';

export default class Book extends React.Component {
	render() {
		let bookId, book, bookInfo, bookReviews;

		if (this.props.books.length > 0) {
			let books = this.props.books;

			bookId = parseInt(this.props.location.slice(6));
			for (let i=1; i <= books.length; i++) {
				if(books[i].id === bookId) {
					book = books[i];
					break;
				}
			}

			bookInfo = <BookInfo book= { book } />
			bookReviews = <ReviewsContainer
											user= { this.props.user }
											book= { book } />
		}

		return (
			<div className= 'show-review'>
				{ bookInfo }
				{ bookReviews }
			</div>
		)		
	}
}
