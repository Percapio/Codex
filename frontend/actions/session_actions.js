import * as APISessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveErrors = (error) => ({
  type: RECEIVE_ERRORS,
  error
});

export const signup = user => dispatch => (
	APISessionUtil.signup(user).then(
		(user) => dispatch(receiveCurrentUser(user)) )
		.fail( (user) => dispatch(receiveErrors(user)) )
);

export const login = user => dispatch => (
  APISessionUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)) )
  	.fail( (user) => dispatch(receiveErrors(user)) )
);

export const logout = (id) => dispatch => (
  APISessionUtil.logout(id).then(
    () => dispatch(receiveCurrentUser(null)) )
  	.fail( () => dispatch(receiveErrors()) )
);
