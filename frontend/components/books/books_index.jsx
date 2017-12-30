import React from 'react';
import BooksContainer from './books_container';

export default class BooksIndex extends React.Component {
	render() {
		let books = this.props.books;
		let index;
		let page_list = [];

		if (books.length > 0) {
			index = books.map( book => 
														<BooksContainer
															key= { book.ISBN }
															book= { book }
															bookshelves= { this.props.bookshelves }
															user= { this.props.user } />	);

			let pages = Math.floor( 178 / books.length );
			let book_pos = Math.ceil((books[books.length - 1].id) / books.length);

			for (let i=0; i < 3; i++) {
				if (i === 0) {
					page_list.push( <p>{ book_pos }</p> );
				} else {
					page_list.push( <p onClick= { () => this.props.renderRange('right', i + 1) } >{ book_pos + i }</p> );
				}

				page_list.push( <p>..</p> );
			}

			page_list.push( <p>{ pages }</p> );
		}

		return (
			<ul className= 'books-index'>

				<div className= 'books-range'>
					<select value= { this.props.value } onChange= { this.props.handleRange } className= 'select-opts'>
						<option value= { 5 }>View 5 books</option>
						<option value= { 10 }>View 10 books</option>
						<option value= { 20 }>View 20 books</option>
						<option value= 'all'>View all</option>
					</select>

					<div className= 'page-list'>
						<i className="fa fa-arrow-left fa-lg" aria-hidden="true" onClick= { () => this.props.renderRange('left') } />
						{ page_list }
						<i className="fa fa-arrow-right fa-lg" aria-hidden="true" onClick= { () => this.props.renderRange('right') } />
					</div>
				</div>

				{ index }
			</ul>
		)
	}
}