import React from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../modal/modal';
import onClickOutside from 'react-onclickoutside';

class SuggestedBook extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.book = props.book;
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
		return(
			<div className= 'side-book-wrap'>
				<div className= 'side-book-container'>
					<img 
						src= { this.book.img_url }
						alt= 'some random book'
						className= 'side-book'
						onClick= { this.handleClick }
						/>

						{ this.state.showModal ? <Modal 
																				item= { this.book }
																				open= { true }
																				type= { 'book' } /> : null }	
				</div>
			</div>
		)
	}
}

export default onClickOutside(SuggestedBook);