import * as APIUtil from '../util/shelves_api_util';

export const RECEIVE_ALL_SHELVES = 'RECEIVE_ALL_SHELVES';
export const RECEIVE_SINGLE_SHELF = 'RECEIVE_SINGLE_SHELF';
export const CREATE_SHELF = 'CREATE_SHELF';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveAllShelves = shelves => ({
	type: RECEIVE_ALL_SHELVES,
	shelves
});

const receiveSingleShelf = shelf => ({
	type: RECEIVE_SINGLE_SHELF,
	shelf
});

const makeShelf = shelf => ({
	type: CREATE_SHELF,
	shelf
});

export const getAllShelves = () => dispatch => (
	APIUtil.getAllShelves().then(
		payload => dispatch(receiveAllShelves(payload)) )
		.catch(err => dispatch(receiveErrors(err)) )
);

export const getSingleShelf = shelfId => dispatch => (
	APIUtil.getSingleShelf(shelfId).then(
		payload => dispatch(receiveSingleShelf(payload)) )
);

export const createShelf = shelf => dispatch => (
	APIUtil.createShelf(shelf).then(
		payload => dispatch(makeShelf(payload)) )
);