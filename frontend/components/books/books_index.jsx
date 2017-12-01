import React from 'react';
import BooksIndexItem from './books_index_item';
import BookshelfContainer from '../bookshelf/bookshelf_container';
import SideBook from '../show_books/side_book';

class BooksIndex extends React.Component {
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
			<div className='main-component'>
				<div className= 'index'>
					<div className= 'index-2'>
						<SideBook />

						<ul className= 'books-index'>
							{ books }
						</ul>
					</div>

					<div className= 'index-1'>
						<BookshelfContainer />
					</div>
				</div>
			</div>
		);
	}
};

export default BooksIndex;