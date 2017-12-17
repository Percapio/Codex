import React from 'react';
import Modal from '../modal/modal';

class BooksIndexItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();

		this.setState({ showModal: true });
	}

	render() {
		let book = this.props.book;
		let user = this.props.user;

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
						<div className= 'stars'>
							<i className= "fa fa-star-o fa-lg" aria-hidden="true"></i>
							<i className= "fa fa-star-o fa-lg" aria-hidden="true"></i>
							<i className= "fa fa-star-o fa-lg" aria-hidden="true"></i>
							<i className= "fa fa-star-o fa-lg" aria-hidden="true"></i>
							<i className= "fa fa-star-o fa-lg" aria-hidden="true"></i>
						</div>

						<div onClick= { this.handleClick }>
							Click to leave a review
						</div>
					</div>
							
							{ this.state.showModal ? <Modal 
																				item= { book }
																				open= { true }
																				type= { 'book' }
																				user= { user } /> : null }	
					<hr />
				</div>

			</li>
		)
	}
}

export default BooksIndexItem;