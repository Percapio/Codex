import React from 'react';
import Modal from '../modal/modal';

class SuggestedBook extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.book = props.book;
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({ showModal: true });
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
																				type= { 'book' }
																				user= { this.props.user } />
																			: null }	
				</div>
			</div>
		)
	}
}

export default SuggestedBook;