import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import Bookshelf from './bookshelf';
import {
	createBookshelf,
	deleteBookshelf
} from '../../actions/bookshelves_actions';
import {
	deleteShelf,
	createShelf
} from '../../actions/shelves_actions';

const mapStateToProps = state => {
	let currentReading, wantToRead;


	for (let i=0; i < state.entities.bookshelves.length; i++) {
		let bookshelf = state.entities.bookshelves[i];
		
		if ((bookshelf.title === 'Currently Reading') && (bookshelf.owner_id == state.session.user.id)) {
			currentReading = bookshelf;
		} else if ((bookshelf.title === 'Want to Read') && (bookshelf.owner_id == state.session.user.id)) {
			wantToRead = bookshelf; 
		} 
	}

	return ({
		currentReading: currentReading,
		wantToRead: wantToRead,
	});
};

const mapDispatchToProps = dispatch => ({
	createBookshelf: (shelf, userId) => dispatch(createBookshelf(shelf, userId)),
	deleteBookshelf: (shelfId, userId) => dispatch(deleteBookshelf(shelfId, userId)),
	deleteShelf: (shelfId) => dispatch(deleteShelf(shelfId)),
	createShelf: () => dispatch(createShelf())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Bookshelf);