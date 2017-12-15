import { connect } from 'react-redux';
import { searchBooksDatabase } from '../../actions/searches_actions';
import BooksSearch from './books_search';

const mapStateToProps = state => ({
	searchResults: state.entities.searches
});

const mapDispatchToProps = dispatch => ({
	searchBooksDatabase: query => dispatch(searchBooksDatabase(query))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BooksSearch);