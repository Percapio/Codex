import * as APISessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
// export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

// const receiveErrors = (error) => ({
//   type: RECEIVE_ERRORS,
//   error
// });

export const login = user => dispatch => (
  APISessionUtil.login(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)) )
);

export const logout = () => dispatch => (
  APISessionUtil.logout().then(
    () => dispatch(receiveCurrentUser(null)) )
);
