import React from 'react';
import Modal from '../modal/modal';
import onClickOutside from 'react-onclickoutside';

class BookshelfItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();

		this.setState({ showModal: true });
	}

	handleClickOutside() {
		this.setState({ showModal: false });
	}

	render() {
		let bookshelf = this.props.item;
		let user = this.props.user;
		let shelfType;

		if (this.props.sideShelves) {
			shelfType = 
				<div>
					<img 
						src= { bookshelf.img_url }
						alt= 'some random book'
						className= 'side-bar-books'
						onClick= { this.handleClick } />
							
					<div className= 'mini-edits'>
						<i className="fa fa-minus-circle" aria-hidden="true"></i>
						<i className="fa fa-plus-circle" aria-hidden="true"></i>
					</div>
				</div>
		} else {
			shelfType = 
				<li className= 'mini-shelf' onClick= { this.handleClick }>
					<p className= 'bookshelf-title'>{ bookshelf.title }</p>
					<i className= "fa fa-times" aria-hidden= "true"></i>
				</li>
		}

		return(
			<div className= 'side-book-wrap'>
				{ shelfType }

				{ this.state.showModal ? <Modal 
																		item= { bookshelf }
																		open= { true }
																		type= { 'bookshelf' }
																		user= { user } /> : null }	
			</div>
		)
	}
}

export default onClickOutside(BookshelfItem);