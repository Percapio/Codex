import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Bookshelf from './bookshelf';
import { 
	selectAllBooks, 
	selectBookshelves 
} from '../../selectors/selectors';
import { 
	getBookshelves,
	createBookshelf,
	deleteBookshelf,
} from '../../actions/bookshelves_actions';
import { 
	deleteShelf, 
	createShelf 
} from '../../actions/shelves_actions';
import { getAllBooks } from '../../actions/books_actions';


const mapStateToProps = state => {
	let currentReading, wantToRead;
	let books = selectAllBooks(state);
	let bookId = Math.floor(Math.random() * books.length);
	let userId = state.session.id;

	for (let i=0; i < state.entities.bookshelves.length; i++) {
		let bookshelf = state.entities.bookshelves[i];
		
		if (bookshelf.title === 'Currently Reading') && (bookshelf.owner_id == userId) {
			currentReading = bookshelf;
		} else if (bookshelf.title === 'Want to Read') && (bookshelf.owner_id == userId) {
			wantToRead = bookshelf; 
		} 
	}

	return({
		currentReading: currentReading,
		wantToRead: wantToRead,
		user: state.session.user,
		bookshelves: selectBookshelves(state),
		books: books,
		random: books[bookId]
	});
};

const mapDispatchToProps = dispatch => ({
	getAllBooks: () => dispatch(getAllBooks()),
	getBookshelves: (userId) => dispatch(getBookshelves(userId)),
	createBookshelf: (shelf, userId) => dispatch(createBookshelf(shelf, userId)),
	deleteBookshelf: (shelfId, userId) => dispatch(deleteBookshelf(shelfId, userId)),
	deleteShelf: (shelfId) => dispatch(deleteShelf(shelfId))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Bookshelf));