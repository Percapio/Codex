import React from 'react';
import BooksIndexItem from './books_index_item';

export default class BooksIndex extends React.Component {
	render() {
		let books = this.props.books;
		let user = this.props.user;
		let index;

		if (books.length > 0) {
			let id, book;

			if (this.props.shelf) {
				index = books.map( book => 
														<BooksIndexItem
															key= { book.ISBN }
															bookId= { id }
															book= { book }
															user= { user } />	)
			} else {
					index = books.map(
										pair => {
											[id, book] = pair

											return (
												<BooksIndexItem
													key= { book.ISBN }
													bookId= { id }
													book= { book }
													user= { user } />
											);
										});
				
			}
		}

		return (
			<ul className= 'books-index'>
				{ index }
			</ul>
		)
	}
}