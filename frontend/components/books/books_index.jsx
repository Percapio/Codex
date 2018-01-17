import React from 'react';
import BooksContainer from './books_container';

export default class BooksIndex extends React.Component {
	render() {
		let books = this.props.books;
		let index, page_list;

		if (books.length > 0) {
			index = books.map( book => 
														<BooksContainer
															key= { book.ISBN }
															book= { book }
															bookshelves= { this.props.bookshelves }
															user= { this.props.user } />	);

			let pages = Math.ceil( 178 / this.props.value );
			let page_pos = Math.ceil(this.props.start / this.props.value);

			switch	(page_pos) {
				case (36):
					page_list = 
						[ 
							<p>{ page_pos }</p>,
							<p onClick= { () => this.props.renderRange('right', 1) }>{ 1 }</p>,
							<p onClick= { () => this.props.renderRange('right', 2) }>{ 2 }</p>,
						];
						break;
				case (35):
					page_list = 
						[ 
							<p>{ page_pos }</p>,
							<p onClick= { () => this.props.renderRange('right', 1) }>{ page_pos + 1}</p>,
							<p onClick= { () => this.props.renderRange('right', 2) }>{ 1 }</p>
						];
						break;
				case (18):
					if ( this.props.value === 10 ) {
						page_list = 
							[ 
								<p>{ page_pos }</p>,
								<p onClick= { () => this.props.renderRange('right', 1) }>{ 1 }</p>,
								<p onClick= { () => this.props.renderRange('right', 2) }>{ 2 }</p>,
							];
						break;
					}
				case (17):
					if ( this.props.value === 10 ) {
					page_list =
						[ 
							<p>{ page_pos }</p>,
							<p onClick= { () => this.props.renderRange('right', 1) }>{ page_pos + 1}</p>,
							<p onClick= { () => this.props.renderRange('right', 2) }>{ 1 }</p>
						];
					break;
				}
				case (1):
					if ( this.props.value === 20 ) {
						page_list =
							[ 
								<p>{ page_pos }</p>,
								<p onClick= { () => this.props.renderRange('right', 1) }>{ page_pos + 1}</p>
							];
						break;
					}
				case (2):
					if ( this.props.value === 20 ) {
						page_list =
							[ 
								<p>{ page_pos }</p>,
								<p onClick= { () => this.props.renderRange('right', 1) }>{ 1 }</p>
							];
						break;
					}
				default:
					page_list = 
						[ 
							<p>{ page_pos }</p>,
							<p onClick= { () => this.props.renderRange('right', 1) }>{ page_pos + 1 }</p>,
							<p onClick= { () => this.props.renderRange('right', 2) }>{ page_pos + 2 }</p>,
						];
			}
		}

		return (
			<ul className= 'books-index'>

				<div className= 'books-range'>
					<select value= { this.props.value } onChange= { this.props.handleRange } className= 'select-opts'>
						<option value= { 5 }>View 5 books</option>
						<option value= { 10 }>View 10 books</option>
						<option value= { 20 }>View 20 books</option>
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