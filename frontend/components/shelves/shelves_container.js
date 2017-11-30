import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
	selectAllBooks,
	selectShelves,
	selectBooksInBookshelf } from '../../selectors/selectors';

import { getShelf } from '../../actions/shelves_actions';
import Shelves from './shelves';

const mapStateToProps = (state, ownProps) => ({
	userId: state.session.user.id,
	bookshelfId: ownProps.location.pathname.substr(ownProps.location.pathname.length - 2),
	shelves: selectShelves(state)
});

const mapDispatchToProps = dispatch => ({
	getShelf: (shelfId) => dispatch(getShelf(shelfId)),
})

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Shelves));