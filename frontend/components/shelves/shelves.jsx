import React from 'react';
import ShelvesItem from './shelves_item';
import BookshelfContainer from '../bookshelf/bookshelf_container';

class Shelves extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getShelf(parseInt(this.props.location.pathname.slice(-2)));
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.match.params.bookshelf_title === this.props.match.params.bookshelf_title) {
		} else {
			this.props.getShelf(parseInt(this.props.location.pathname.slice(-2)));
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

				<div className= 'index'>
					<div className= 'index-2'>
						<div>
						</div>

						<ul className= 'books-index'>
							{ shelves }
						</ul>

						<div>
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