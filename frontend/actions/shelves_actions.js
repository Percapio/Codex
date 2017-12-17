import * as APIUtil from '../util/shelves_api_util';

import { receiveBooks } from './books_actions';

export const RECEIVE_ALL_SHELVES = 'RECEIVE_ALL_SHELVES';
export const CREATE_SHELF = 'CREATE_SHELF';
export const REMOVE_SHELF = 'REMOVE_SHELF';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SHELF = 'RECEIVE_SHELF';

const receiveAllShelves = shelves => ({
	type: RECEIVE_ALL_SHELVES,
	shelves
});

const makeShelf = shelf => ({
	type: CREATE_SHELF,
	shelf
});

const removeShelf = shelfId => ({
	type: REMOVE_SHELF
});

const receiveShelf = shelf => ({
	type: RECEIVE_SHELF,
	shelf
})


export const getAllShelves = (shelfId) => dispatch => (
	APIUtil.getAllShelves(shelfId).then(
		payload => dispatch(receiveAllShelves(payload)) )
);

export const createShelf = (shelf) => dispatch => {
	return(
		APIUtil.createShelf(shelf).then(
			payload => dispatch(makeShelf(payload)) )
	)
};

export const deleteShelf = (shelfId) => dispatch => (
	APIUtil.deleteShelf(shelfId).then(
		() => dispatch(receiveShelf(null)) )
);

export const getShelf = shelfId => dispatch => (
	APIUtil.getShelf(shelfId).then(
		(shelf) => {
			dispatch(receiveShelf(shelf));
		})
);