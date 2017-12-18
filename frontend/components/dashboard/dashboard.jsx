import React from 'react';
import { NavLink } from 'react-router-dom';

import Bookshelf from '../bookshelf/bookshelf';
import SuggestedBook from './suggested_book';
import BooksIndex from '../books/books_index.jsx';

class Dashboard extends React.Component {
	componentDidMount() {
		this.props.getBookshelves(this.props.user.id);
		this.props.getAllBooks();
		this.props.getSingleBook(Math.floor(Math.random() * 178));
	}

	render() {
		let suggestedBook, bookshelves;

		if (typeof this.props.random != 'undefined') {
			suggestedBook = <SuggestedBook 
												book= { this.props.random } 
												user= { this.props.user }
												bookshelves= { this.props.bookshelves } />
		}

		if ((typeof this.props.bookshelves != 'undefined') && (this.props.books.length > 0)) {
			bookshelves = <Bookshelf 
											bookshelves= { this.props.bookshelves } 
											user= { this.props.user }
											createBookshelf= { this.props.createBookshelf } />
		}

		return (
			<div className= 'dashboard'>
				<div className= 'suggested-book-container'>
					{ suggestedBook }
				</div>

				<div className= 'render-container'>
					<BooksIndex
						books= { this.props.books }
						user= { this.props.user }
						bookshelves= { this.props.bookshelves }
						thumbs= { this.props.thumbs }
						createThumb= { this.props.createThumb }
						deleteThumb= { this.props.deleteThumb }
						getThumb= { this.props.getThumb }
						shelf= { false } />
				</div>

				<div className= 'bookshelves-container'>
					{ bookshelves }
				</div>
			</div>
		)
	}
}

export default Dashboard;