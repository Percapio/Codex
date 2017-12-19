export const getAllBooks = () => (
	$.ajax({
		method: 'GET',
		url: 'api/books'
	})
);

export const getSingleBook = id => (
	$.ajax({
		method: 'GET',
		url: `api/books/${id}`
	})
);

export const getMultipleBooks = range => (
	$.ajax({
		method: 'GET',
		url: `api/books/range`,
		data: {
			start_pos: range.startPos,
			end_pos: range.endPos
		}
	})
);