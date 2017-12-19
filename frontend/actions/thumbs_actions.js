import * as APIUtil from '../util/thumbs_api_util';

export const FETCH_THUMBS = 'FETCH_THUMBS';
export const FETCH_THUMB = 'FETCH_THUMB';
export const DELETE_THUMB = 'DELETE_THUMB';

const fetchThumbs = thumbs => ({
	type: FETCH_THUMBS,
	thumbs
});

const fetchThumb = thumb => ({
	type: FETCH_THUMB,
	thumb
});

const deleteThumb = thumb => ({
	type: DELETE_THUMB,
	thumb
});

export const getThumbs = () => dispatch => (
	APIUtil.getThumbs().then(
		payload => dispatch(fetchThumbs(payload))
	)
);

export const getThumb = (book_id) => dispatch => (
	APIUtil.getThumb(book_id).then(
		payload => dispatch(fetchThumbs(payload))
	)
);

export const createThumb = (thumb) => dispatch => (
	APIUtil.createThumb(thumb).then(
		payload => dispatch(fetchThumb(payload))
	)
);

export const removeThumb = (thumb) => dispatch => (
	APIUtil.removeThumb(thumb).then(
		payload => dispatch(deleteThumb(payload))
	)
);