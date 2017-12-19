import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getShelf } from '../../actions/shelves_actions';
import Shelf from './shelf';

const mapStateToProps = (state, ownProps) => {
	return ({
		bookshelf: ownProps.bookshelf,
		bookshelves: ownProps.options.bookshelves,
		user: ownProps.user,
		books: ownProps.options.books,
		handleDelete: ownProps.options.handleDelete,
	})
};

const mapDispatchToProps = dispatch => ({
	getShelf: shelfId => dispatch(getShelf(shelfId))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Shelf));