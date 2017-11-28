import React from 'react';
import ShelvesItem from './shelves_item';
import BookshelfContainer from '../bookshelf/bookshelf_container';

class Shelves extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			bookshelf_id: this.props.match.bookshelfId,
			shelf: this.props.match.shelf
		};
	}

	handleClick(e) {
		e.preventDefault();
		this.props.history.push(`/user/${this.props.userId}`);
	}

	// componentDidMount() {
	// 	this.props.getSingleShelf({ this.state.shelf });
	// }

	handleSubmit(e) {
		e.preventDefault();
		this.props.createShelf(this.state.shelf);
	}

	render() {
		return (
			<div className= 'main-component'>
				<h2>Bookshelf: { this.props.match.params.bookshelf_title }</h2>

				<button className= 'back-button' onClick= { this.handleClick }>Go Back!
				</button>

				<div className= 'index'>
					<div className= 'books-index'>
						<h3>Bookshelf Items</h3>
					</div>

					<div>
						<form className= 'add-shelf'>
							<h3>Add Shelf here?</h3>
							<input
								type= 'text'
								name= 'add shelf' />

							<input
								type= 'submit'
								value= 'Submit'
								className= 'submit-button' />
						</form>

						<div>
							<p>Container for searching books</p>
						</div>
					</div>

					<div className= 'index-bookshelf'>
						<BookshelfContainer />
					</div>

				</div>
			</div>
		)
	}
}

export default Shelves;