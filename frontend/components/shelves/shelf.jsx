import React from 'react';
import BooksIndex from '../books/books_index';

export default class Shelf extends React.Component {
	componentDidMount() {
		this.props.getShelf( this.props.bookshelf.id );
	}

	render() {
		return(
			<div className= 'shelf-index'>
				<BooksIndex 
						books= { this.props.books }
						user= { this.props.user }
						bookshelves= { this.props.bookshelves }
						shelf= { true } />
			</div>
		)
	}
}