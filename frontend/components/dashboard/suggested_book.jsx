import React from 'react';
import ModalContainer from '../modal/modal_container';

export default class SuggestedBook extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.book = props.book;
		this.handleClick = this.handleClick.bind(this);
		this.callbackToParent = this.callbackToParent.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.handleModal();
	}

	handleModal() {
		this.setState({ showModal: !this.state.showModal });
	}

	callbackToParent() {
		this.handleModal();
	}

	render() {
		let options = { bookshelves: this.props.bookshelves }
		return(
			<div className= 'side-book-wrap'>
				<img 
					src= { this.book.img_url }
					alt= 'some random book'
					className= 'side-book'
					onClick= { this.handleClick }
					/>

				{ this.state.showModal ? <ModalContainer
																		item= { this.book }
																		open= { true }
																		type= { 'book' }
																		user= { this.props.user }
																		options= { options }
																		callbackToParent= { this.callbackToParent } /> : 
																	null }	
			</div>
		)
	}
}