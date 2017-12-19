import React from 'react';
import { NavLink } from 'react-router-dom';

import Bookshelf from '../bookshelf/bookshelf';
import SuggestedBook from './suggested_book';
import BooksIndex from '../books/books_index.jsx';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { value: 5 }
		this.page = 0;

		this.renderRange = this.renderRange.bind(this);
		this.handleRange = this.handleRange.bind(this);
	}
	componentDidMount() {
		this.props.getBookshelves(this.props.user.id);
		this.props.getSingleBook(Math.floor(Math.random() * 178));
		this.props.getMultipleBooks({ startPos: parseInt(this.page), endPos: parseInt(this.state.value) });
	}

	handleRange(e) {
		e.preventDefault();
		this.props.getMultipleBooks({ startPos: parseInt(this.page), endPos: parseInt(this.state.value) });
	}

	renderRange(direction) {
		if (direction === 'left') {
			this.page += this.state.value;
			this.range(this.page);
			this.setState({ value: this.state.value + this.page });
		} else if (direction === 'right') {
			this.page -= this.state.value;
			this.range(this.page);
			this.setState({ value: this.state.value - this.page });
		}
	}

	range(number) {
		let length = this.props.books.length;

		if (length > 0) {
			if (number < 0) {
				this.page += length;
			} else if (number + this.state.value >= length) {
				this.page -= length;
			}

			let endPos = this.page + this.state.value;
			this.props.getMultipleBooks({ startPos: parseInt(this.page), endPos: parseInt(endPos) });
		}
	}

	render() {
		let suggestedBook, bookshelves, pageSelect;
		let books = this.props.books;

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

		if (typeof this.props.books != 'undefined') {
			pageSelect = <div>{ 1 }</div>
		}

		return (
			<div className= 'dashboard'>
				<div className= 'suggested-book-container'>
					{ suggestedBook }
				</div>

				<div className= 'render-container'>
					<div className= 'books-range'>
						<i className="fa fa-arrow-left" aria-hidden="true" onClick= { () => this.renderRange('left') } />
						<select value= { this.state.value } onChange= { this.handleRange } >
							<option value= { 5 } defaultValue>5</option>
							<option value= { 10 }>10</option>
							<option value= { 20 }>20</option>
							<option value= 'all'>ALL</option>
						</select>
						<i className="fa fa-arrow-right" aria-hidden="true" onClick= { () => this.renderRange('right') } />
						<h3>{ pageSelect }</h3>
					</div>
					<BooksIndex
						books= { books }
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