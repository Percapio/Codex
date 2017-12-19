import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { 
	selectShelves,
	selectAllThumbs
} from '../../selectors/selectors';

import { getShelf } from '../../actions/shelves_actions';
import Shelf from './shelf';

import {
	createThumb,
	removeThumb,
	getThumb	
} from '../../actions/thumbs_actions';

const mapStateToProps = (state, ownProps) => {
	return ({
		bookshelf: ownProps.bookshelf,
		user: ownProps.user,
		books: selectShelves(state),
		thumbs: selectAllThumbs(state)
	})
}

const mapDispatchToProps = dispatch => ({
	getShelf: shelfId => dispatch(getShelf(shelfId)),
	createThumb: thumb => dispatch(createThumb(thumb)),
	removeThumb: thumb => dispatch(removeThumb(thumb)),
	getThumb: (book_id) => dispatch(getThumb(book_id)),
})

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Shelf));