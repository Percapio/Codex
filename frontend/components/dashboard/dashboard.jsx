import React from 'react';
import { NavLink } from 'react-router-dom';

import Bookshelf from '../bookshelf/bookshelf';
import SuggestedBook from './suggested_book';
import BooksIndex from '../books/books_index.jsx';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { value: 5 }
		this.page = 1;

		this.renderRange = this.renderRange.bind(this);
		this.handleRange = this.handleRange.bind(this);
	}
	componentDidMount() {
		this.props.getBookshelves(this.props.user.id);
		this.props.getSingleBook(Math.floor(Math.random() * 178));
		this.props.getMultipleBooks({ startPos: this.page, endPos: this.state.value });
	}

	handleRange(e) {
		e.preventDefault();
		let newValue = e.target.value;

		if (newValue === 'all') {
			this.props.getAllBooks();
		} {
			this.setState({ value: parseInt(newValue) }, () => this.range(this.state.value));
		}
	}

	renderRange(direction) {
		let indicator;
		if (direction === 'right') {
			indicator = this.state.value;
		} else if (direction === 'left') {
			indicator = this.state.value * -1
		}

		this.page += indicator;
		if (this.page < 0) {
			this.page += 177;
		} else if (this.page > 177) {
			this.page -= 177;
		}

		this.range(indicator);
	}

	range(indicator = 0) {
		let endPos = indicator + this.page;

		if (endPos < 0) {
			endPos += 177;
		} else if (endPos >= 177) {
			endPos -= 177
		}

		endPos > this.page ? 
		this.props.getMultipleBooks({ startPos: this.page, endPos: endPos }) :
		this.props.getMultipleBooks({ startPos: endPos, endPos: this.page });
		this.forceUpdate();
	}

	render() {
		let suggestedBook, bookshelves, index;
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

		if (typeof books != 'undefined') {
			index = <BooksIndex
								books= { books }
								user= { this.props.user }
								bookshelves= { this.props.bookshelves }
								shelf= { false } />
		}

		return (
			<div className= 'dashboard'>
				<div className= 'suggested-book-container'>
					{ suggestedBook }
				</div>

				<div className= 'render-container'>
					<div className= 'books-range'>
						<i className="fa fa-arrow-left fa-2x" aria-hidden="true" onClick= { () => this.renderRange('left') } />
						<select value= { this.state.value } onChange= { this.handleRange } >
							<option value= { 5 }>5</option>
							<option value= { 10 }>10</option>
							<option value= { 20 }>20</option>
							<option value= 'all'>ALL</option>
						</select>
						<i className="fa fa-arrow-right fa-2x" aria-hidden="true" onClick= { () => this.renderRange('right') } />
					</div>
				</div>
				{ index }
				<div className= 'bookshelves-container'>
					{ bookshelves }
				</div>
			</div>
		)
	}
}