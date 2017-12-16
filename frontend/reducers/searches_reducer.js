import { RECEIVE_SEARCH_RESULTS } from '../actions/searches_actions';

export const searches = ( state = {}, action ) => {
	Object.freeze(state);

	switch (action.type) {
		case RECEIVE_SEARCH_RESULTS:
			return action.searchResults;
		default:
			return state;
	}
};