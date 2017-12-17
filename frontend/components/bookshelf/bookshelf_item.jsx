import React from 'react';
import ModalContainer from '../modal/modal_container';

export default class BookshelfItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({ showModal: true });
	}

	handleDelete(e) {
		e.preventDefault();
		this.props.deleteShelf(this.props.book.id);
		this.setState({ showModal: false });
	}

	handleDeleteBookshelf(e) {
		e.preventDefault();
		this.props.deleteBookshelf(this.props.bookshelf.id, this.props.user.id);
		this.setState({ showModal: false });
	}

	render() {
		let shelfType;

		if (this.props.sideShelves) {
			shelfType = 
				<div>
					<img 
						src= { this.props.book.img_url }
						alt= 'some random book'
						className= 'side-bar-books'
						onClick= { this.handleClick } />
							
					<div className= 'mini-edits'>
						<i className="fa fa-arrow-left" aria-hidden="true" />
						<i className="fa fa-minus-circle" aria-hidden="true" onClick= { this.handleDelete } />
						<i className="fa fa-arrow-right" aria-hidden="true" />
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
																		item= { bookshelf }
																		open= { true }
																		type= { 'bookshelf' }
																		user= { this.props.user } /> : null }	
			</div>
		)
	}
}