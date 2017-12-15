import React from 'react';
import { NavLink } from 'react-router-dom';
import Bookshelf from '../bookshelf/bookshelf';
import SuggestedBook from './suggested_book';

class Dashboard extends React.Component {
	componentDidMount() {
		this.props.getBookshelves(this.props.user.id);
		this.props.getAllBooks();
	}

	render() {
		let suggestedBook, bookshelves;

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

		return (
			<div className= 'dashboard'>
				<div className= 'suggested-book-container'>
					{ suggestedBook }
				</div>

				<div className= 'render-container'>

				</div>

				<div className= 'bookshelves-container'>
					{ bookshelves }
				</div>
			</div>
		)
	}
}

export default Dashboard;