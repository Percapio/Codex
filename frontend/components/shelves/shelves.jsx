import React from 'react';
import ShelvesItem from './shelves_item';
import BookshelfContainer from '../bookshelf/bookshelf_container';

class Shelves extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			bookshelfId: this.props.bookshelfId,
			bookId: 1
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// componentDidMount() {
	// 	this.props.getSingleShelf({ this.state.shelf });
	// }

	handleSubmit(e) {
		e.preventDefault();
		this.props.createShelf(this.state);
	}

	handleShelf() {
	}

	render() {
		return (
			<div className= 'main-component'>
				<h2>Bookshelf: { this.props.match.params.bookshelf_title }</h2>

				<div className= 'index'>
					<div className= 'books-index'>
						<h3>Bookshelf Items</h3>
					</div>

					<div>
						<button onClick= { this.handleSubmit }>Click</button>

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