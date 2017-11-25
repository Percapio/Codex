import React from 'react';
import BooksIndexItem from './books_index_item';
import BookShowContainer from './book_show_container';
import MiniBookshelf from './mini_bookshelf';

class BooksIndex extends React.Component {
	componentDidMount() {
		this.props.getAllBooks();
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
					<MiniBookshelf />
				</div>
			</div>
		);
	}
};

export default BooksIndex;