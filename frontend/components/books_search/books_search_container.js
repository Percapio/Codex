import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchBooksDatabase } from '../../actions/searches_actions';

import BooksSearch from './books_search';

const mapStateToProps = (state, ownProps) => ({
	searchResults: state.entities.searches,
	user: state.session.user,
	handleSearch: ownProps.handleSearch,
});

const mapDispatchToProps = dispatch => ({
	searchBooksDatabase: query => dispatch(searchBooksDatabase(query))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(BooksSearch));