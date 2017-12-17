import React from 'react';
import BooksIndexItem from './books_index_item';

export default class BooksIndex extends React.Component {
	render() {
		let books = this.props.books;
		let index;

		if (books.length > 0) {
			index = books.map( book => 
														<BooksIndexItem
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