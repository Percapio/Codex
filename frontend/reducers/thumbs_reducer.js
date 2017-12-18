import { 
	FETCH_THUMBS,
	FETCH_THUMB,
	DELETE_THUMB
} from '../actions/thumbs_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
	Object.freeze(state);

	switch(action.type) {
		case FETCH_THUMBS:
			return action.reviews;

		case FETCH_THUMB:
			return merge({}, state, {[action.thumb.id]: action.thumb});

		case DELETE_THUMB:
			let oldState = merge({}, state);
			delete oldState[action.thumb.id];
			return oldState;
		default:
			return state;
	}
} 
