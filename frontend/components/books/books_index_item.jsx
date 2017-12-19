import React from 'react';
import ModalContainer from '../modal/modal_container';

export default class BooksIndexItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

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
		let book = this.props.book;
		let user = this.props.user;
		let options = { 
			bookshelves: this.props.bookshelves,
		};

		return(
			<li className= 'book-info' >
				<img 
					src= { book.img_url }
					alt= 'some random book'
					className= 'book-splash'
					onClick= { this.handleClick } />

				<div className= 'book-review'>
					<div className= 'book-label'>
						<h4 
							className= 'book-nav'
							onClick= { this.handleClick } >{ book.title }</h4>
						<p>by { book.author }</p>
					</div>

					<div className= 'book-summary'>Description:
						<br/>
						<div className= 'summary'>{ book.summary }</div>
					</div>

					<div className= 'book-stars'>
						<div onClick= { this.handleClick }>
							Click to leave a review
						</div>
					</div>
							
							{ this.state.showModal ? <ModalContainer 
																					item= { book }
																					open= { true }
																					type= { 'book' }
																					options= { options }
																					user= { user }
																					callbackToParent= { this.callbackToParent } /> : 
																				null }	
					<hr />
				</div>

			</li>
		)
	}
}