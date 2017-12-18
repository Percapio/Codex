export const createThumb = thumb => (
	$.ajax({
		method: 'POST',
		url: 'api/thumbs',
		data: {
			book_id: thumb.book_id,
			up: thumb.up
		}
	})
);

export const removeThumb = thumb => (
	$.ajax({
		method: 'DELETE',
		url: `api/thumbs/${ thumb.book_id}`,
		data: {
			book_id: thumb.book_id
		}
	})
);

export const getThumbs = () => (
	$.ajax({
		method: 'GET',
		url: 'api/thumbs'
	})
);

export const getThumb = book_id => (
	$.ajax({
		method: 'GET',
		url: `api/thumbs/book_id`,
		data: {
			book_id: book_id
		}
	})
)