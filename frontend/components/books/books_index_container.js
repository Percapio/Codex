import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectAllBooks } from '../../selectors/selectors';	

import BooksIndex from './books_index';

const mapStateToProps = (state) => ({
	books: selectAllBooks(state),
});

export default withRouter(connect(
	mapStateToProps,
	null
)(BooksIndex));