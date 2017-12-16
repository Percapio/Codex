import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
	selectAllBooks,
	selectShelves,
	selectBooksInBookshelf } from '../../selectors/selectors';

import { getShelf, getAllShelves } from '../../actions/shelves_actions';
import Shelves from './shelves';

const mapStateToProps = (state, ownProps) => {
	let currentShelf;

	return ({
		currentShelf: ownProps.match.params.bookshelf_title,
		userId: state.session.user.id,
		shelves: selectShelves(state)
	})
};

const mapDispatchToProps = dispatch => ({
	// getAllShelves: (shelfId) => dispatch(getAllShelves(shelfId)),
	getShelf: (shelfId) => dispatch(getShelf(shelfId))
})

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Shelves));