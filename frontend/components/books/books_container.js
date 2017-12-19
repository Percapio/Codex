import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BooksIndexItem from './books_index_item';

const mapStateToProps = (state, ownProps) => ({
	book: ownProps.book,
	bookshelves: ownProps.bookshelves,
	user: ownProps.user,
});

export default withRouter(connect(
	mapStateToProps,
	null
)(BooksIndexItem));