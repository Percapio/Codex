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

