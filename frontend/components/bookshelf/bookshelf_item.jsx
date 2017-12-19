import React from 'react';
import ModalContainer from '../modal/modal_container';

export default class BookshelfItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.number = 0;

		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.callbackToParent = this.callbackToParent.bind(this);
		this.renderBookImage = this.renderBookImage.bind(this);
		this.handleDeleteBookshelf = this.handleDeleteBookshelf.bind(this);
	}

	componentDidMount() {
		this.props.getShelf( this.props.bookshelf.id );
	}

	handleClick(e) {
		e.preventDefault();
		this.handleModal();
	}

	handleDelete(e) {
		e.preventDefault();
		this.props.deleteShelf({ 
			book_id: this.props.books[ this.number ].id,
			bookshelf_id: this.props.bookshelf.id });
		this.forceUpdate();
	}

	handleDeleteBookshelf(e) {
		e.preventDefault();
		this.props.deleteBookshelf(this.props.bookshelf.id, this.props.user.id);
		this.forceUpdate();
	}

	handleModal() {
		this.setState({ showModal: !this.state.showModal });
	}

	callbackToParent() {
		this.handleModal();
	}

	renderBookImage(direction) {
		if (direction === 'left') {
			this.number += 1;
			this.image(this.number);
			this.forceUpdate();
		} else if (direction === 'right') {
			this.number -= 1;
			this.image(this.number);
			this.forceUpdate();
		}
	}

	image(number) {
		let length = this.props.books.length;

		if (length > 0) {
			if (number < 0) {
				this.number += length;
			} else if (number >= length) {
				this.number -= length;
			} 
			return this.props.books[this.number].img_url;
		}
	}

	render() {
		let shelfType, image;
		let options = { 
			handleDeleteBookshelf: this.handleDeleteBookshelf,
			books: this.props.books,
			bookshelves: this.props.bookshelves }

		if (typeof this.props.books === 'undefined') {
			image = this.props.bookshelf.img_url;
		} else {
			image = this.image( this.number );
			if (typeof image === 'undefined') {
				image = this.props.bookshelf.img_url;
			}
		}

		if (this.props.sideShelves) {
			shelfType = 
				<div>
					<img 
						src= { image }
						alt= 'some random book'
						className= 'side-bar-books'
						onClick= { this.handleClick } />
							
					<div className= 'mini-edits'>
						<i className="fa fa-arrow-left" aria-hidden="true" onClick= { () => this.renderBookImage('left') } />
						<i className="fa fa-minus-circle" aria-hidden="true" onClick= { this.handleDelete } />
						<i className="fa fa-arrow-right" aria-hidden="true" onClick= { () => this.renderBookImage('right') } />
					</div>
				</div>
		} else {
			shelfType = 
				<li className= 'mini-shelf' onClick= { this.handleClick }>
					<p className= 'bookshelf-title'>{ this.props.bookshelf.title }</p>
					<i className= "fa fa-times" aria-hidden= "true" onClick= { this.handleDeleteBookshelf } />
				</li>
		}

		return(
			<div className= 'side-book-wrap'>
				{ shelfType }

				{ this.state.showModal ? <ModalContainer 
																		item= { this.props.bookshelf }
																		open= { true }
																		type= { 'bookshelf' }
																		user= { this.props.user }
																		options= { options }
																		callback= { this.callbackToParent } /> : null }	
			</div>
		)
	}
}