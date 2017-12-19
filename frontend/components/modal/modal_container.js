import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { 
	createShelf,
	deleteShelf
} from '../../actions/bookshelves_actions';

import { selectAllThumbs } from '../../selectors/selectors';

import ModalComponent from './modal';


const mapStateToProps = (state, ownProps) => {
	return({
		open: ownProps.open,
		type: ownProps.type,
		item: ownProps.item,
		user: ownProps.user,
		options: ownProps.options,
		callbackToParent: ownProps.callbackToParent
	})
};

const mapDispatchToProps = dispatch => ({
	createShelf: (bookshelfId, bookId) => dispatch(createShelf(bookshelfId, bookId)),
	deleteShelf: shelfId => dispatch(deleteShelf(shelfId)),
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(ModalComponent));