import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { 
	createShelf,
	deleteShelf
} from '../../actions/shelves_actions';

import { selectAllThumbs } from '../../selectors/selectors';

import ModalComponent from './modal';

import {
	createThumb,
	removeThumb,
	getThumb	
} from '../../actions/thumbs_actions';

const mapStateToProps = (state, ownProps) => ({
	open: ownProps.open,
	type: ownProps.type,
	item: ownProps.item,
	user: ownProps.user,
	thumbs: selectAllThumbs(state),
	options: ownProps.options
});

const mapDispatchToProps = dispatch => ({
	createShelf: (bookshelfId, bookId) => dispatch(createShelf(bookshelfId, bookId)),
	deleteShelf: shelfId => dispatch(deleteShelf(shelfId)),
	
	createThumb: thumb => dispatch(createThumb(thumb)),
	removeThumb: thumb => dispatch(removeThumb(thumb)),
	getThumb: book_id => dispatch(getThumb(book_id))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(ModalComponent));