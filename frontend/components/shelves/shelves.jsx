import React from 'react';
import ShelvesItem from './shelves_item';
import BookshelfContainer from '../bookshelf/bookshelf_container';

class Shelves extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			bookshelfId: parseInt(this.props.bookshelfId),
			bookId: 0
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createShelf(this.state);
	}

	componentWillMount() {
		this.props.getShelf(this.state.bookshelfId);
	}
	
	render() {
		let shelves = [].concat.apply([], this.props.shelves);
		shelves = shelves.map (
			(shelf, index) => <ShelvesItem key= { index } shelf= { shelf } />
		);

		return (
			<div className= 'main-component'>
				<h2>Bookshelf: { this.props.match.params.bookshelf_title }</h2>

				<div className= 'index'>
					<div className= 'shelves-index'>
						<div>
						</div>

						<ul className= 'books-index'>
							{ shelves }
						</ul>

						<div>
							<button onClick= { this.handleSubmit }></button>
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