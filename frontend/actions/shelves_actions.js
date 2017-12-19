import * as APIUtil from '../util/shelves_api_util';

export const RECEIVE_ALL_SHELVES = 'RECEIVE_ALL_SHELVES';
export const RECEIVE_SHELF = 'RECEIVE_SHELF';

const receiveAllShelves = shelves => ({
	type: RECEIVE_ALL_SHELVES,
	shelves
});

const receiveShelf = shelf => ({
	type: RECEIVE_SHELF,
	shelf
});

export const getAllShelves = (shelfId) => dispatch => (
	APIUtil.getAllShelves(shelfId).then(
		payload => dispatch(receiveAllShelves(payload)) )
);


export const getShelf = shelfId => dispatch => (
	APIUtil.getShelf(shelfId).then(
		(payload) => {
			dispatch(receiveShelf(payload));
		})
);