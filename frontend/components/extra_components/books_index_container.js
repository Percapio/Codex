import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectAllBooks } from '../../selectors/selectors';	

import BooksIndex from './books_index';

const mapStateToProps = (state) => {
	let books = selectAllBooks(state)
	let id = Math.floor(Math.random() * books.length)

	return ({
		books: books,
		random: books[id]
	})
}

export default withRouter(connect(
	mapStateToProps,
	null
)(BooksIndex));