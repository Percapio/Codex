import React from 'react';
import BooksIndexItem from './books_index_item';
import BookShowContainer from './book_show_container';

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
			<div class= 'index-page'>
				<div className= 'single-books'>
					<BookShowContainer />
				</div>

				<div>
					<ul className= 'books-index'>
						{ books }
					</ul>
				</div>

				<div className= 'index-bookshelf'>
					<img src= 'http://www.scholastic.com/parents/sites/default/files/field_asset_image/iStock_000043350128_XXXLarge.jpg' alt= 'some random book'/>
					<h3>BOOKSHELF GOES HERE</h3>
				</div>
			</div>
		);
	}
};

export default BooksIndex;