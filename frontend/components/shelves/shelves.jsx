import React from 'react';
import ShelvesItem from './shelves_item';
import BookshelfContainer from '../bookshelf/bookshelf_container';
import SideBook from '../show_books/side_book';

class Shelves extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getShelf(parseInt(this.props.location.pathname.slice(-1)));
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.match.params.bookshelf_title === this.props.match.params.bookshelf_title) {
		} else {
			this.props.getShelf(parseInt(this.props.location.pathname.slice(-1)));
		}
	}
	
	render() {
		let shelves = [].concat.apply([], this.props.shelves);
		shelves = shelves.map (
			(shelf, index) => <ShelvesItem key= { index } shelf= { shelf } />
		);

		return (
			<div className= 'main-component'>
				<h2>{ this.props.match.params.bookshelf_title }</h2>

				<div className= 'index index-container'>
					<div className= 'index-2'>
						<div className= 'shelves-index'>
							<SideBook />

							<ul className= 'books-index'>
								{ shelves }
							</ul>
						</div>
					</div>

					<div className= 'index-1'>
						<BookshelfContainer />
					</div>

				</div>
			</div>
		)
	}
}

export default Shelves;