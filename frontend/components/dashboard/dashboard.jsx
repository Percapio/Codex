import React from 'react';
import { NavLink } from 'react-router-dom';

import Bookshelf from '../bookshelf/bookshelf';
import SuggestedBook from './suggested_book';
import BooksIndex from '../books/books_index.jsx';
import Book from '../reviews/book';

class Dashboard extends React.Component {
	componentDidMount() {
		this.props.getBookshelves(this.props.user.id);
		this.props.getAllBooks();
		this.props.getSingleBook(Math.floor(Math.random() * 178));
	}

	render() {
		let suggestedBook, bookshelves, main;
		let location = this.props.location.pathname.slice(1);

		//regex
		const booksUrl = /books\/\d*/;

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

		if (location === `${ this.props.user.username }`) {
			main = <BooksIndex
									books= { Object.entries(this.props.books) }
									user= { this.props.user } />
		} else if (booksUrl.test(location)) {
			main = <Book 
									user= { this.props.user } 
									books= { Object.values(this.props.books) }
									getReviews= { this.props.getReviews }
									createReview= { this.props.createReview }
									destroyReview= { this.props.destroyReview }
									updateReview= { this.props.updateReview }
									grabUsers= { this.props.grabUsers }
									location= { location } />
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