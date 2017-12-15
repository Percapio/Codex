import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectAllBooks } from '../../selectors/selectors';	

import BooksIndex from './books_index';

const mapStateToProps = (state) => {
	books = selectAllBooks(state)

	return ({
		books: books,
		random: books[Math.floor(Math.random() * books.length)]
	})
}

export default withRouter(connect(
	mapStateToProps,
	null
)(BooksIndex));