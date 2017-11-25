import React from 'react';
import BookshelfItem from './bookshelf_item';

class Bookshelf extends React.Component {
	componentDidMount() {
		this.props.selectBookshelf(this.props)
	}

	render() {
		const bookshelves = this.props.bookshelf.map(
			bookshelf => ( 
				<BookshelfItem
					key= { bookshelf.id }
					bookshelf = { bookshelf }
				/>
			)
		);

		return(
			<div className= 'bookshelf-container'>
				<p>Bookshelf JSX</p>
			</div>
		)
	}
};

export default Bookshelf;