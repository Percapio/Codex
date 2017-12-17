import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BooksIndex from './books_index';

const mapStateToProps = (state, ownProps) => {
	let books = ownProps.books
	let id = Math.floor(Math.random() * books.length)

	return ({
		books: books,
		random: books[id],
		bookshelves: ownProps.bookshelves
	})
}

export default withRouter(connect(
	mapStateToProps,
	null
)(BooksIndex));