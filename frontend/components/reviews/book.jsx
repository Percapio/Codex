import React from 'react';
import ReviewsContainer from './reviews_container';

export default class Book extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			bookshelf_id: '',
			book_id: props.book.id 
		};

		this.notify = false;
		this.type = '';

		this.handleSelect = this.handleSelect.bind(this);
		this.handleSelectors = this.handleSelectors.bind(this);

		this.handleDeleteShelf = this.handleDeleteShelf.bind(this);
		this.handleDeleting = this.handleDeleting.bind(this);
	}

	handleSelect(e) {
		e.preventDefault(); 
		this.props.createShelf( this.state ).then(
			this.notification('add'),
				this.errorNotification('add') );
	}

	notification(type) {
		this.notify = true;
		this.type = type;
		setTimeout(() => this.removeNotification(), 3000 );
	}

	removeNotification() {
		this.errorNotify = false;
		this.notify = false;
		this.type = '';
		this.forceUpdate();
	}

	errorNotification(type) {
		this.errorNotify = true;
		this.type = type;
		setTimeout(() => this.removeNotification(), 3000 );
	}

	handleSelectors(e) {
		e.preventDefault();
		this.setState({ bookshelf_id: e.target.value });
	}

	handleDeleteShelf(e) {
		e.preventDefault();
		this.props.deleteShelf( this.state ).then(
			this.notification('delete'),
				this.errorNotification('delete') );
	}

	handleDeleting(e) {
		e.preventDefault();
		this.setState({ bookshelf_id: e.target.value });
	}

	render() {
		let message;
		let deleteShelf = [];
		let bookshelvesList = [];
		let book = this.props.book;

		this.props.options.bookshelves.map( shelf => {
					deleteShelf.push(
						<option
							key= { shelf.id }
							value= { parseInt(shelf.id) }
							>{ shelf.title }</option> );
					bookshelvesList.push(
						<option 
							key= { shelf.id }
							value= { parseInt(shelf.id) }
							>{ shelf.title }</option> );
				}
			);

		if (this.notify) {
			message = this.type === 'add' ? <h3>Book added to bookshelf</h3> : <h3>Book removed from bookshelf</h3> 
		} else if (this.errorNotify) {
			message = this.type === 'add' ? <h3>Already in bookshelf</h3> : <h3>Not in bookshelf</h3> 
		}

		return(
			<div className= 'show-review'>
				<div className= 'book-info'>

					<div className= 'book-container'>
						<div className= 'img-container'>
							<img src= { book.img_url } alt= 'some book'/>
						</div>

						<div className= 'notes'>
							<h2>{ book.title }</h2>
							<p className= 'author'>by { book.author }</p>
							<p>Summary:</p>
							<p className= 'summary'>{ book.summary }</p>
		
							<div className= 'bookshelves-buttons'>
								<form onSubmit= { this.handleSelect } className= 'select-bookshelf' >
									<select value= { this.state.value } onChange= { this.handleSelectors } className= 'select-opts'>
										<option key= { 0 } defaultValue>Choose Bookshelf to Add to</option>
										{ bookshelvesList }
									</select>
									<input type='submit' value='Add to Bookshelf' />
								</form>

								<form onSubmit= { this.handleDeleteShelf } className= 'select-bookshelf'>
									<select value= { this.state.value } onChange= { this.handleDeleting } className= 'select-opts' >
										<option key= { 0 } defaultValue>Choose Bookshelf to Remove from</option>
										{ deleteShelf }
									</select>
									<input type='submit' value='Delete from Bookshelf' />
								</form>

								{ message }
							</div>
						</div>
					</div>

				</div>

				<ReviewsContainer book= { book } user= { this.props.user } />
			</div>
		)
	}
}