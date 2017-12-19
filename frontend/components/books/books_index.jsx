import React from 'react';
import BooksContainer from './books_container';

export default class BooksIndex extends React.Component {
	render() {
		let books = this.props.books;
		let index;

		if (books.length > 0) {
			index = books.map( book => 
														<BooksContainer
															key= { book.ISBN }
															book= { book }
															bookshelves= { this.props.bookshelves }
															user= { this.props.user } />	);
		}

		return (
			<ul className= 'books-index'>
				{ index }
			</ul>
		)
	}
}