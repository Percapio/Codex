import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
	user: null
});

export default (state = _nullUser, action) => {

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    	const user = action.user
      return merge({}, { user });

    default:
      return state;
  }
};
