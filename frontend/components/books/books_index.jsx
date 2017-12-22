import React from 'react';
import BooksContainer from './books_container';

export default class BooksIndex extends React.Component {
	render() {
		let books = this.props.books;
		let index;

		if (books.length > 0) {
			index = books.map( book => 
														<BooksContainer
															key= { book.ISBN }
															book= { book }
															bookshelves= { this.props.bookshelves }
															user= { this.props.user } />	);
		}

		return (
			<ul className= 'books-index'>

				<div className= 'render-container'>
					<div className= 'books-range'>
						<select value= { this.props.value } onChange= { this.props.handleRange } >
							<option value= { 5 }>5</option>
							<option value= { 10 }>10</option>
							<option value= { 20 }>20</option>
							<option value= 'all'>ALL</option>
						</select>
						<i className="fa fa-arrow-left fa-2x" aria-hidden="true" onClick= { () => this.renderRange('left') } />
						<i className="fa fa-arrow-right fa-2x" aria-hidden="true" onClick= { () => this.renderRange('right') } />
					</div>
				</div>

				{ index }
			</ul>
		)
	}
}