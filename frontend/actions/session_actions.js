import * as APISessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (error) => ({
  type: RECEIVE_ERRORS,
  error
});

export const signup = user => dispatch => (
	APISessionUtil.signup(user).then(
		(user) => dispatch(receiveCurrentUser(user)) ),
		(error) => dispatch(receiveErrors(error.responseJSON))
);

export const login = user => dispatch => (
  APISessionUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)) ),
    (error) => dispatch(receiveErrors(error.responseJSON))
);

export const logout = (id) => dispatch => (
  APISessionUtil.logout(id).then(
    () => dispatch(receiveCurrentUser(null)) ),
    (error) => dispatch(receiveErrors(error.responseJSON))
);
