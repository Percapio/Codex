import React from 'react';
import { NavLink } from 'react-router-dom';

import Bookshelf from '../bookshelf/bookshelf';
import SuggestedBook from './suggested_book';
import BooksIndex from '../books/books_index.jsx';

class Dashboard extends React.Component {
	componentDidMount() {
		this.props.getBookshelves(this.props.user.id);
		this.props.getAllBooks();
	}

	render() {
		let suggestedBook, bookshelves, main;

		if (typeof this.props.random != 'undefined') {
			suggestedBook = <SuggestedBook 
												book= { this.props.random } 
												user= { this.props.user } />
		}

		if (typeof this.props.bookshelves != 'undefined') {
			bookshelves = <Bookshelf 
											bookshelves= { this.props.bookshelves } 
											user = { this.props.user } 
											createBookshelf= { this.props.createBookshelf }
											deleteBookshelf= { this.props.deleteBookshelf }
											deleteShelf= { this.props.deleteShelf }
											createShelf= { this.props.createShelf } />
		}

		if (this.props.location.pathname === `/${ user.username }`) {
			main = <BooksIndex
									books= { Object.entries(this.props.books) }
									user= { this.props.user } />
		}

		return (
			<div className= 'dashboard'>
				<div className= 'suggested-book-container'>
					{ suggestedBook }
				</div>

				<div className= 'render-container'>
					{ main }
				</div>

				<div className= 'bookshelves-container'>
					{ bookshelves }
				</div>
			</div>
		)
	}
}

export default Dashboard;