import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
	selectAllBooks,
	selectShelves,
	selectBooksInBookshelf } from '../../selectors/selectors';

import { getShelf } from '../../actions/shelves_actions';
import Shelves from './shelves';

const mapStateToProps = (state, ownProps) => {
	let currentReading, wantToRead, currentShelf;

	for (let i=0; i < state.entities.bookshelves.length; i++) {
		if (state.entities.bookshelves[i].title === 'Currently Reading') {
			currentReading = state.entities.bookshelves[i];
		} else if (state.entities.bookshelves[i].title === 'Want to Read') {
			wantToRead = state.entities.bookshelves[i]; 
		} 
	}

	return ({
		currentReading: currentReading,
		wantToRead: wantToRead,
		currentShelf: ownProps.match.params.bookshelf_title,
		userId: state.session.user.id,
		shelves: selectShelves(state)
	})
};

const mapDispatchToProps = dispatch => ({
	getShelf: (shelfId) => dispatch(getShelf(shelfId)),
})

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Shelves));