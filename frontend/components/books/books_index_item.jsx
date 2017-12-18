import React from 'react';
import ModalContainer from '../modal/modal_container';

class BooksIndexItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.handleClick = this.handleClick.bind(this);
		this.handleUp = this.handleUp.bind(this);
		this.handleDown = this.handleDown.bind(this);
		this.callbackToParent = this.callbackToParent.bind(this);
	}

	componentDidMount() {
		this.props.getThumb(this.props.book.id);
	}

	handleClick(e) {
		e.preventDefault();
		this.handleModal();
	}	

	handleUp(e) {
		e.preventDefault();
		this.props.createThumb({ up: 'true', book_id: parseInt(this.props.book.id) });
	}	

	handleDown(e) {
		e.preventDefault();
		this.props.createThumb({ up: 'false', book_id: parseInt(this.props.book.id) });
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
			thumbs: this.props.thumbs,
			handleUp: this.handleUp,
			handleDown: this.handleDown
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
						<ul className= 'thumbs'>
							<li onClick= { this.handleUp }>
								<i className="fa fa-thumbs-o-up" aria-hidden="true" />
							</li>
							<li onClick= { this.handleDown } >
								<i className="fa fa-thumbs-o-down" aria-hidden="true" />
							</li>
						</ul>

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
																				callback= { this.callbackToParent } /> : null }	
					<hr />
				</div>

			</li>
		)
	}
}

export default BooksIndexItem;