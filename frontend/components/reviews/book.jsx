import React from 'react';
import ReviewsContainer from './reviews_container';

export default class Book extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			bookshelf_id: '',
			book_id: props.book.id 
		}

		this.notify = false;
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault(); 
		this.props.createShelf( this.state );
		this.notify = true;
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({ bookshelf_id: e.target.value });
	}

	render() {
		let book = this.props.book;
		let bookshelvesList = this.props.bookshelves.map( shelf => 
														<option 
															key= { shelf.id }
															value= { parseInt(shelf.id) } >{ shelf.title }</option> );

		let message = this.notify ? <h3>Book added to bookshelf</h3> : null

		return(
			<div className= 'show-review'>
				<div className= 'book-info'>
					<h2>{ book.title }</h2>

					<div className= 'book-container'>
						<div className= 'show-top'>
							<div className= 'img-container'>
								<img src= { book.img_url } alt= 'some book'/>
							</div>

							<div className= 'book-info'>
								<div className= 'book-title'>
									<p>by { book.author }</p>
								</div>
							</div>

							<div className= 'show-bottom'>
								<div className= 'book-summary'>
									<p>{ book.summary }</p>
								</div>
							</div>
						</div>
					</div>

					<div className= 'bookshelves-buttons'>
						<form onSubmit= { this.handleSubmit } className= 'select-bookshelf' >
							<select value= { this.state.value } onChange= { this.handleChange } >
								<option key= { 0 } >Choose Bookshelf to Add to</option>
								{ bookshelvesList }
							</select>
							{ message }
							<input type='submit' value='Select' />
						</form>
					</div>
				</div>

				<ReviewsContainer book= { book } user= { this.props.user } />
			</div>
		)
	}
}