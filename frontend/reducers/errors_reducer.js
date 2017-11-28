import { combineReducers } from 'redux';

import errors from './session_errors_reducer';
import catchErrors  from './catch_errors_reducer';

export default combineReducers({
	errors,
	catchErrors
});