import { 
	FETCH_REVIEWS,
	FETCH_REVIEW,
	REMOVE_REVIEW
} from '../actions/reviews_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
	Object.freeze(state);

	switch(action.type) {
		case FETCH_REVIEWS:
			return action.reviews;

		case FETCH_REVIEW:
			return merge({}, state, {[action.review.id]: action.review});

		case REMOVE_REVIEW:
			let oldState = merge({}, state);
			delete oldState[action.review.id];
			return oldState;
		default:
			return state;
	}
} 
