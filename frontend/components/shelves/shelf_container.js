import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectShelves } from '../../selectors/selectors';
import { getAllShelves } from '../../actions/shelves_actions';
import Shelf from './shelf';

const mapStateToProps = (state, ownProps) => {
	return ({
		bookshelf: ownProps.bookshelf,
		user: ownProps.user,
		books: selectShelves(state)
	})
}

const mapDispatchToProps = dispatch => ({
	getAllShelves: shelfId => dispatch(getAllShelves(shelfId))
})

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Shelf));