import React from 'react';
import BookShowItem from './book_show';

class BookShow extends React.Component {
	componentDidMount() {
		this.props.getSingleBook(this.props.book.id)
	}

	render() {
		return (
			<div>
				<div className= "current-reading">
					<BookShowItem
						key= { this.props.book.id }
						book= { this.props.book } />
				</div>

				<div className= "want-to-read">
				</div>
			</div>
		)
	}
}