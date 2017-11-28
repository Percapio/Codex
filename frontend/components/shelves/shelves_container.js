import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { 
	getAllShelves,
	getSingleShelf,
	createShelf } from '../../actions/shelves_actions';
import { 
	selectBooksInBookshelf,
	selectShelf } from '../../selectors/selectors';

import Shelves from './shelves';

const mapStateToProps = state => ({
	bookshelfId: state.entities.bookshelves[0].id,
	userId: state.session.user.id,
	shelf: selectShelf(state),
});

const mapDispatchToProps = dispatch => ({
	// getAllShelves: () => dispatch(getAllShelves()),
	getSingleShelf: (shelfId) => dispatch(getSingleShelf(shelfId)),
	createShelf: (shelf) => dispatch(createShelf(shelf))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Shelves));