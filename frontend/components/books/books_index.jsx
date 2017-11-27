import React from 'react';
import BooksIndexItem from './books_index_item';
import BookShowContainer from './book_show_container';
import MiniBookshelf from './mini_bookshelf';

class BooksIndex extends React.Component {
	componentDidMount() {
		this.props.getAllBooks();
		this.props.getBookshelves();
	}

	render() {
		const books = this.props.books.map(
			book => {
				return (
					<BooksIndexItem
						key= { book.id }
						book= { book } />
				);
			});

		return (
			<div>
				<h2>Welcome, { this.props.user }!</h2>
				<div className= 'index-page'>
					<div className= 'single-books'>
						<BookShowContainer />
					</div>

					<div>
						<ul className= 'books-index'>
							{ books }
						</ul>
					</div>

					<div className= 'index-bookshelf'>
						<MiniBookshelf
							user_id= { this.props.match.params.user_id }
							bookshelves= { this.props.bookshelves } />
					</div>
				</div>
			</div>
		);
	}
};

export default BooksIndex;