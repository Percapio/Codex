import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { deleteShelf } from '../../actions/shelves_actions';
import { deleteBookshelf } from '../../actions/bookshelves_actions';
import BookshelfItem from './bookshelf_item';

const mapStateToProps = (state, ownProps) => {
	let book, books;

	if ((typeof ownProps.books != 'undefined') && (typeof ownProps.bookshelf != 'undefined')){
		books = ownProps.books;
		book = ownProps.books[Math.floor(Math.random() * books.length)];
	} 

	return({
		book: book,
		bookshelf: ownProps.bookshelf,
		user: ownProps.user,
		sideShelves: ownProps.sideShelves
	})
};

const mapDispatchToProps = dispatch => ({
	deleteBookshelf: (shelfId, userId) => dispatch(deleteBookshelf(shelfId, userId)),
	deleteShelf: (shelfId) => dispatch(deleteShelf(shelfId)),
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(BookshelfItem))