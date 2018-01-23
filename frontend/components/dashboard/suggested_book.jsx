import React from 'react';
import ModalContainer from '../modal/modal_container';

export default class SuggestedBook extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		};

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
				<h3>Suggested Book</h3>
				<img 
					src= { this.book.img_url }
					alt= 'some random book'
					className= 'side-book'
					onClick= { this.handleClick }
					/>
				<h4>{ this.book.title }</h4>
				<p>by { this.book.author }</p>

				<div className= 'links-to-me'>
					<a href='http://thomasvu.space/#/'>
						<img src='http://redriverunited.org/wp-content/uploads/2014/06/globe.png' alt='website logo' />
					</a>
					<a href='https://github.com/Percapio'>
						<img src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' alt='github logo' />
					</a>
					<a href='https://www.linkedin.com/in/mrthomasmvu/'>
						<img src='https://image.flaticon.com/icons/svg/61/61109.svg' alt='linkedin logo' />
					</a>
				</div>

				{ this.state.showModal ? <ModalContainer
																		item= { this.book }
																		open= { true }
																		type= { 'book' }
																		user= { this.props.user }
																		options= { options }
																		callbackToParent= { this.callbackToParent } /> : 
																	null }	
			</div>
		);
	}
}