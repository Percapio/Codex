import { connect } from 'react-redux';
import { selectAllBooks, selectBookshelves } from '../../selectors/selectors';
import { withRouter } from 'react-router-dom';
import { 
	getBookshelves,
	createBookshelf,
	deleteBookshelf,
} from '../../actions/bookshelves_actions';
import { getAllBooks } from '../../actions/books_actions';
import { deleteShelf, createShelf } from '../../actions/shelves_actions';

import Bookshelf from './bookshelf';

const mapStateToProps = state => {
	let currentReading, wantToRead;

	for (let i=0; i < state.entities.bookshelves.length; i++) {
		if (state.entities.bookshelves[i].title === 'Currently Reading') {
			currentReading = state.entities.bookshelves[i];
		} else if (state.entities.bookshelves[i].title === 'Want to Read') {
			wantToRead = state.entities.bookshelves[i]; 
		} 
	}
	
	return({
		currentReading: currentReading,
		wantToRead: wantToRead,
		user: state.session.user,
		bookshelves: selectBookshelves(state),
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