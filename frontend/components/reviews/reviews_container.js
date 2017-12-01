import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
	getReviews,
	createReview,
	destroyReview,
	updateReview } from '../../actions/reviews_actions';
import { selectAllReviews } from '../../selectors/selectors';
import { getSingleBook } from '../../actions/books_actions';
import { getAllBooks } from '../../actions/books_actions';
import Reviews from './reviews';

const mapStateToProps = (state, ownProps) => {
	// debugger;
	return({
		book: state.entities.books[ownProps.match.params.id - 1],	
		userId: state.session.user.id,
		reviews: selectAllReviews(state)		
	})
};

const mapDispatchToProps = dispatch => ({
	getAllBooks: () => dispatch(getAllBooks()),
	getReviews: reviews => dispatch(getReviews(reviews)),
	createReview: review => dispatch(createReview(review)),
	destroyReview: review => dispatch(destroyReview(review)),
	updateReview: review => dispatch(destroyReview(review))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Reviews));