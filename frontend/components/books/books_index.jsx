import React from 'react';
import BooksIndexItem from './books_index_item';

export default class BooksIndex extends React.Component {
	render() {
		let books = this.props.books;
		let thumbs = this.props.thumbs;
		let index;

		if (books.length > 0) {
			index = books.map( book => 
														<BooksIndexItem
															key= { book.ISBN }
															book= { book }
															thumbs= { this.props.thumbs }
															bookshelves= { this.props.bookshelves }
															getThumb= { this.props.getThumb }
															createThumb= { this.props.createThumb }
															deleteThumb= { this.props.deleteThumb }
															user= { this.props.user } />	);
		}

		return (
			<ul className= 'books-index'>
				{ index }
			</ul>
		)
	}
}