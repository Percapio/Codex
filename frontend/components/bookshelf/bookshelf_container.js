import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { 
	deleteShelf,
	getShelf,
} from '../../actions/shelves_actions';

import { selectShelves } from '../../selectors/selectors';
import { deleteBookshelf } from '../../actions/bookshelves_actions';
import BookshelfItem from './bookshelf_item';

const mapStateToProps = (state, ownProps) => {
	return({
		book: selectShelves(state),
		bookshelf: ownProps.bookshelf,
		user: ownProps.user,
		sideShelves: ownProps.sideShelves,
	})
};

const mapDispatchToProps = dispatch => ({
	deleteBookshelf: (shelfId, userId) => dispatch(deleteBookshelf(shelfId, userId)),
	deleteShelf: (shelfId) => dispatch(deleteShelf(shelfId)),
	getShelf: shelfId => dispatch(getShelf(shelfId))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(BookshelfItem))